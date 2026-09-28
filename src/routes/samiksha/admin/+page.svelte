<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase';
	import { collection, getDocs, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
	import * as XLSX from 'xlsx';

	let profiles = [];
	let filtered = [];
	let selectedIds = [];

	let loading = true;
	let search = '';
	let fieldFilter = 'all';

	let toast = '';
	let showToast = false;

	// 🔥 KNOW MORE STATE
	let showKnowModal = false;
	let knowData = null;
	let userPrefs = [];

	onMount(async () => {
		try {
			//  GET SESSION
			const session = document.cookie.split('; ').find((row) => row.startsWith('user='));

			//  NO SESSION
			if (!session) {
				goto('/samiksha/login');

				return;
			}

			//  PARSE USER
			const user = JSON.parse(decodeURIComponent(session.split('=')[1]));

			//  NOT ADMIN
			if (!user || user.role !== 'admin') {
				goto('/samiksha/login');

				return;
			}

			//  LOAD DATA
			const snap = await getDocs(collection(db, 'profiles'));

			profiles = snap.docs.map((d) => ({
				id: d.id,

				uid: d.data().uid || d.id,

				...d.data()
			}));

			filtered = profiles;
		} catch (err) {
			console.error(err);

			goto('/samiksha/login');
		} finally {
			loading = false;
		}
	});

	async function openKnowMore(p) {
		knowData = p;

		showKnowModal = true;

		userPrefs = [];

		try {
			const userId = p.uid || p.id;

			const snap = await getDoc(doc(db, 'users', userId));

			if (!snap.exists()) {
				console.log(' No user doc:', userId);

				return;
			}

			const data = snap.data();

			const prefs = [];

			for (let i = 1; i <= 10; i++) {
				const prefId = data[`pref${i}`];

				if (!prefId) continue;

				//  FIX MATCH
				const prof = profiles.find(
					(x) =>
						// MATCH UID
						String(x.uid) === String(prefId) ||
						// MATCH DOC ID
						String(x.id) === String(prefId)
				);

				if (prof) {
					prefs.push({
						...prof,

						rank: i
					});
				}
			}

			//  REACTIVE UPDATE
			userPrefs = [...prefs];

			console.log(' FINAL PREFS:', userPrefs);
		} catch (err) {
			console.error(' Prefs error:', err);
		}
	}

	function closeKnowMore() {
		showKnowModal = false;
		knowData = null;
		userPrefs = [];
	}

	function showToastMsg(msg) {
		toast = msg;
		showToast = true;
		setTimeout(() => (showToast = false), 3000);
	}

	let showEditModal = false;
	let editData: any = {};
	let exporting = false;
	let saving = false;

	function openEdit(p) {
		editData = {
			...p,

			uid: p.uid || '',

			name: p.name || '',

			email: p.email || '',

			username: p.username || '',

			photo: p.photo || '',

			institutionName: p.institutionName || '',

			discipline: p.discipline || '',

			scholarType: p.scholarType || '',

			coreResearchArea: p.coreResearchArea || '',

			professionalBio: p.professionalBio || '',

			iksThemes: p.iksThemes || ''
		};

		showEditModal = true;
	}

	function closeEdit() {
		showEditModal = false;
	}

	async function saveEdit() {
		try {
			saving = true;

			//  CLEAN VALUES
			editData.name = (editData.name || '').trim();

			editData.email = (editData.email || '').trim();

			editData.username = (editData.username || '').trim();

			editData.photo = (editData.photo || '').trim();

			editData.institutionName = (editData.institutionName || '').trim();

			editData.discipline = (editData.discipline || '').trim();

			editData.scholarType = (editData.scholarType || '').trim();

			editData.coreResearchArea = (editData.coreResearchArea || '').trim();

			editData.professionalBio = (editData.professionalBio || '').trim();

			editData.iksThemes = (editData.iksThemes || '').trim();

			// UPDATE PROFILE
			await updateDoc(doc(db, 'profiles', editData.id), {
				name: editData.name,

				email: editData.email,

				username: editData.username,

				photo: editData.photo,

				institutionName: editData.institutionName,

				discipline: editData.discipline,

				scholarType: editData.scholarType,

				coreResearchArea: editData.coreResearchArea,

				professionalBio: editData.professionalBio,

				iksThemes: editData.iksThemes
			});

			// UPDATE USER
			await updateDoc(doc(db, 'users', editData.uid || editData.id), {
				name: editData.name,

				email: editData.email,

				username: editData.username
			});

			//  UPDATE UI
			profiles = profiles.map((p) =>
				p.id === editData.id
					? {
							...p,
							...editData
						}
					: p
			);

			applyFilter();

			closeEdit();

			showToastMsg('Profile updated ');
		} catch (err) {
			console.error(err);

			showToastMsg('Update failed ');
		} finally {
			saving = false;
		}
	}

	onMount(async () => {
		try {
			const snap = await getDocs(collection(db, 'profiles'));

			profiles = snap.docs.map((d) => ({
				id: d.id,
				uid: d.data().uid || d.id,
				...d.data()
			}));

			filtered = profiles;
		} catch (err) {
			console.error(err);
			showToastMsg('Failed loading profiles ');
		} finally {
			loading = false;
		}
	});

	function applyFilter() {
		const s = search.toLowerCase();

		filtered = profiles.filter(
			(p) =>
				((p.name || '').toLowerCase().includes(s) ||
					(p.email || '').toLowerCase().includes(s) ||
					(p.institutionName || '').toLowerCase().includes(s)) &&
				(fieldFilter === 'all' || p.discipline === fieldFilter)
		);
	}

	function toggleSelect(id) {
		if (selectedIds.includes(id)) {
			selectedIds = selectedIds.filter((x) => x !== id);
		} else {
			selectedIds = [...selectedIds, id];
		}
	}
	function toggleAll() {
		const allIds = filtered.map((p) => p.id);

		const isAllSelected = allIds.every((id) => selectedIds.includes(id));

		//  CLEAR ALL
		if (isAllSelected) {
			selectedIds = [];
		} else {
			//  SELECT ALL
			selectedIds = [...allIds];
		}
	}

	async function bulkDelete() {
		if (!selectedIds.length) {
			return showToastMsg('Select profiles');
		}

		try {
			loading = true;

			for (let id of selectedIds) {
				const profile = profiles.find((p) => p.id === id);

				// 🗑 DELETE PROFILE
				await deleteDoc(doc(db, 'profiles', id));

				// 🗑 DELETE USER
				await deleteDoc(doc(db, 'users', profile?.uid || id));
			}

			profiles = profiles.filter((p) => !selectedIds.includes(p.id));

			selectedIds = [];

			applyFilter();

			showToastMsg('Profiles deleted ');
		} catch (err) {
			console.error(err);

			showToastMsg('Bulk delete failed ');
		} finally {
			loading = false;
		}
	}

	async function exportExcel() {
		try {
			exporting = true;

			showToastMsg('Preparing Excel file...');

			const exportData = [];

			for (let index = 0; index < filtered.length; index++) {
				const p = filtered[index];

				let prefs = [];

				try {
					const userId = p.uid || p.id;

					const snap = await getDoc(doc(db, 'users', userId));

					if (snap.exists()) {
						const data = snap.data();

						for (let i = 1; i <= 10; i++) {
							const prefId = data[`pref${i}`];

							if (prefId) {
								const prof = profiles.find((x) => String(x.uid || x.id) === String(prefId));

								if (prof) {
									prefs.push(`${i}. ${prof.name}`);
								}
							}
						}
					}
				} catch (err) {
					console.error('Prefs export error:', err);
				}

				//  UPDATED EXPORT
				exportData.push({
					SrNo: index + 1,

					UID: p.uid || '',

					Name: p.name || '',

					Email: p.email || '',

					Institution: p.institutionName || '',

					Discipline: p.discipline || '',

					CoreResearchArea: p.coreResearchArea || '',

					ProfessionalBio: p.professionalBio || '',

					IKSThemes: p.iksThemes || '',

					Photo: p.photo || '',

					UserPreferences: prefs.join(', ')
				});
			}

			//  CREATE SHEET
			const ws = XLSX.utils.json_to_sheet(exportData);

			//  COLUMN WIDTHS
			ws['!cols'] = [
				{ wch: 8 }, // SrNo
				{ wch: 20 }, // UID
				{ wch: 28 }, // Name
				{ wch: 35 }, // Email
				{ wch: 35 }, // Institution
				{ wch: 22 }, // Discipline
				{ wch: 40 }, // Research
				{ wch: 60 }, // Bio
				{ wch: 45 }, // IKS
				{ wch: 45 }, // Photo
				{ wch: 60 } // Prefs
			];

			//  CREATE WORKBOOK
			const wb = XLSX.utils.book_new();

			XLSX.utils.book_append_sheet(wb, ws, 'Profiles');

			//  DOWNLOAD
			XLSX.writeFile(wb, 'profiles_export.xlsx');

			showToastMsg('Excel downloaded ');
		} catch (err) {
			console.error(err);

			showToastMsg('Export failed ');
		} finally {
			exporting = false;
		}
	}

	function isSelected(id) {
		return selectedIds.includes(id);
	}

	async function deleteProfile(id, uid) {
		if (!confirm('Delete this profile?')) {
			return;
		}

		try {
			loading = true;

			// 🗑 DELETE PROFILE
			await deleteDoc(doc(db, 'profiles', id));

			// 🗑 DELETE USER
			await deleteDoc(doc(db, 'users', uid));

			//  UPDATE UI
			profiles = profiles.filter((p) => p.id !== id);

			applyFilter();

			showToastMsg('Profile & user deleted ');
		} catch (err) {
			console.error(err);

			showToastMsg('Delete failed ');
		} finally {
			loading = false;
		}
	}
</script>

<div class="container">
	<h2 class="title">Admin Dashboard</h2>

	<div class="filters">
		<input placeholder="Search..." bind:value={search} on:input={applyFilter} />

		<div class="actions">
			<button class="add" on:click={() => goto('/samiksha/admin/add')}> Add New </button>
			<button on:click={toggleAll}>
				{selectedIds.length === filtered.length ? 'Clear' : 'Select All'}
			</button>

			<button on:click={exportExcel} disabled={exporting}>
				{#if exporting}
					<span class="spinner"></span>
					Exporting...
				{:else}
					Export
				{/if}
			</button>

			<button class="danger" on:click={bulkDelete}>
				Delete ({selectedIds.length})
			</button>
		</div>
	</div>

	{#if loading}
		<p class="center">Loading...</p>
	{:else}
		<div class="grid">
			{#each filtered as p}
				<div class="card" class:selected={isSelected(p.id)}>
					<!--  CHECKBOX -->
					<input
						type="checkbox"
						class="select-box"
						checked={selectedIds.includes(p.id)}
						on:change={() => toggleSelect(p.id)}
					/>

					<!--  SELECTED ICON -->
					{#if isSelected(p.id)}
						<div class="check">✔</div>
					{/if}

					<!-- IMAGE -->
					<img
						src={`/images/profile/${p.username}.jpg`}
						alt={p.name}
						on:error={(e) => {
							e.target.src = '/images/profile/default-user.png';
						}}
					/>

					<!-- INFO -->
					<h3>{p.name}</h3>

					<p>{p.institutionName}</p>

					<!-- EDIT -->
					<button class="edit" on:click|stopPropagation={() => openEdit(p)}> Edit </button>

					<!-- KNOW MORE -->
					<button class="secondary" on:click|stopPropagation={() => openKnowMore(p)}>
						Know More
					</button>

					<!-- DELETE -->
					<button
						class="delete"
						on:click|stopPropagation={() => deleteProfile(p.id, p.uid || p.id)}
					>
						Delete
					</button>
				</div>
			{/each}
		</div>
	{/if}

	<!-- MODAL -->
	{#if showEditModal}
		<div class="modal" on:click={closeEdit}>
			<div class="modal-box" on:click|stopPropagation>
				<h2>Edit Profile</h2>

				<div class="form-grid">
					<div class="form-group">
						<label>Name</label>
						<input bind:value={editData.name} />
					</div>

					<div class="form-group">
						<label>Email ID</label>

						<input type="email" bind:value={editData.email} />
					</div>

					<div class="form-group">
						<label>Username</label>
						<input bind:value={editData.username} />
					</div>

					<div class="form-group">
						<label>Scholar Type</label>
						<input bind:value={editData.scholarType} />
					</div>

					<div class="form-group full">
						<label>Photo URL</label>
						<input bind:value={editData.photo} />
					</div>

					<div class="form-group">
						<label>Institution Name</label>
						<input bind:value={editData.institutionName} />
					</div>

					<div class="form-group">
						<label>Core Research Area</label>
						<input bind:value={editData.coreResearchArea} />
					</div>

					<div class="form-group full">
						<label>Discipline</label>

						<select bind:value={editData.discipline}>
							<option value=""> Select Discipline </option>

							<option value="Contemporary Social/ Cultural Sciences">
								Contemporary Social/ Cultural Sciences
							</option>

							<option value="Mathematical, Physical and Astronomical Sciences">
								Mathematical, Physical and Astronomical Sciences
							</option>

							<option value="Speech and Linguistics"> Speech and Linguistics </option>

							<option value="Medical and Health Science"> Medical and Health Science </option>

							<option value="Political, Economic and Strategic Sciences">
								Political, Economic and Strategic Sciences
							</option>

							<option value="Culinary, Nutritional and Pharmacological Sciences">
								Culinary, Nutritional and Pharmacological Sciences
							</option>

							<option value="Performing Arts"> Performing Arts </option>

							<option value="Mechanical &amp; Digital Design &amp; Engineering">
								Mechanical &amp; Digital Design &amp; Engineering
							</option>

							<option value="Civil and Architectural Science">
								Civil and Architectural Science
							</option>

							<option value="Fine Arts and Sculpture"> Fine Arts and Sculpture </option>

							<option value="Chemical, Metallurgical &amp; Material Sciences">
								Chemical, Metallurgical &amp; Material Sciences
							</option>

							<option value="Fashion and Interior Design"> Fashion and Interior Design </option>

							<option value="Agricultural Science, Veterinary &amp; Animal Husbandry">
								Agricultural Science, Veterinary &amp; Animal Husbandry
							</option>

							<option value="Edutainment Sciences"> Edutainment Sciences </option>

							<option value="Vedic Philosophical and Cognitive Sciences">
								Vedic Philosophical and Cognitive Sciences
							</option>

							<option value="Historical and Civilizational Sciences">
								Historical and Civilizational Sciences
							</option>
						</select>
					</div>

					<div class="form-group full">
						<label>3 Themes within IKS</label>

						<textarea bind:value={editData.iksThemes}></textarea>
					</div>

					<div class="form-group full">
						<label>Brief Professional Bio</label>

						<textarea bind:value={editData.professionalBio}></textarea>
					</div>
				</div>

				<div class="modal-actions">
					<button on:click={saveEdit} disabled={saving} class="save-btn">
						{#if saving}
							<span class="spinner"></span>
							Saving...
						{:else}
							Save
						{/if}
					</button>
					<button class="secondary" on:click={closeEdit}>Cancel</button>
				</div>
			</div>
		</div>
	{/if}

	{#if showToast}
		<div class="toast">{toast}</div>
	{/if}

	{#if showKnowModal && knowData}
		<div class="modal" on:click={closeKnowMore}>
			<div class="modal-box profile-modal" on:click|stopPropagation>
				<div class="profile-layout">
					<!-- LEFT SIDE -->
					<div class="profile-left">
						<!-- IMAGE -->
						<img
							src={`/images/profile/${knowData.username}.jpg`}
							class="profile-img"
							alt={knowData.name}
							on:error={(e) => {
								e.target.src = '/images/profile/default-user.png';
							}}
						/>

						<!-- NAME -->
						<h2>{knowData.name}</h2>

						<!-- EMAIL -->
						{#if knowData.email}
							<p class="sub">
								{knowData.email}
							</p>
						{/if}

						<!-- INSTITUTION -->
						{#if knowData.institutionName}
							<div class="info-block">
								<span> Institution </span>

								<p>
									{knowData.institutionName}
								</p>
							</div>
						{/if}

						<!-- DISCIPLINE -->
						{#if knowData.discipline}
							<div class="info-block">
								<span> Discipline </span>

								<p>
									{knowData.discipline}
								</p>
							</div>
						{/if}

						<!-- SCHOLAR TYPE -->
						{#if knowData.scholarType}
							<div class="info-block">
								<span> Scholar Type </span>

								<p>
									{knowData.scholarType}
								</p>
							</div>
						{/if}
					</div>

					<!-- RIGHT SIDE -->
					<div class="profile-right">
						<!-- BIO -->
						{#if knowData.professionalBio}
							<div class="info-card">
								<h3>Brief Professional Bio</h3>

								<p class="desc">
									{knowData.professionalBio}
								</p>
							</div>
						{/if}
						<div class="info-card">
							<!-- IKS -->
							{#if knowData.iksThemes}
								<div class="info-block">
									<h3>IKS Themes</h3>

									<p>
										{knowData.iksThemes}
									</p>
								</div>
							{/if}
						</div>
						<div class="info-card">
							<!-- RESEARCH -->
							{#if knowData.coreResearchArea}
								<div class="info-block">
									<h3>Research Area</h3>

									<p>
										{knowData.coreResearchArea}
									</p>
								</div>
							{/if}
						</div>
					</div>
				</div>

				<!-- USER PREFS -->
				<div class="info-card" style="margin-top: 30px;">
					<span> User Preferences </span>

					{#if userPrefs.length > 0}
						<div class="prefs-grid">
							{#each userPrefs as p, i}
								<div class="pref-card">
									<img
										src={`/images/profile/${p.username}.jpg`}
										alt={p.name}
										on:error={(e) => {
											e.target.src = '/images/profile/default-user.png';
										}}
									/>

									<span class="rank">
										{i + 1}
									</span>

									<p>{p.name}</p>
								</div>
							{/each}
						</div>
					{:else}
						<p class="empty">No preferences found</p>
					{/if}
				</div>

				<!-- CLOSE -->
				<button class="close-btn" on:click={closeKnowMore}> Close </button>
			</div>
		</div>
	{/if}
</div>

<style>
	/* ===== PAGE CONTAINER ===== */
	.title {
		text-align: center;
		margin-top: 100px;
	}

	.center {
		text-align: center;
	}
	button.delete {
		background: #e74c3c;
		color: white;
	}

	button.danger {
		background: #e74c3c;
		color: white;
	}
	/* ===== FILTER BAR ===== */
	.filters {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1100px;
		margin: 20px auto;
		gap: 12px;
		flex-wrap: wrap;
	}

	.filters input,
	.filters select {
		padding: 10px 12px;
		border: 1px solid #ddd;
		border-radius: 8px;
		min-width: 200px;
	}

	/* ===== GRID FIX ===== */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 24px;
		padding: 20px;
		max-width: 1200px;
		margin: auto;
	}
	/* ===== CARD ===== */
	.card {
		position: relative;
		background: white;
		padding: 20px;
		border-radius: 14px;
		text-align: center;
		border: 1px solid #eee;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
		transition: 0.3s ease;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.card:hover {
		transform: translateY(-5px);
	}

	/* SELECTED STATE */
	.card.selected {
		background: #f5943d !important;
		border: 2px solid #f5943d;
		color: white;
		box-shadow: 0 12px 30px rgba(245, 148, 61, 0.5);
		transform: scale(1.03);
	}
	/* ✅ SELECTED CARD */
	.card.selected {
		border: 2px solid #f5943d;
		background: #fff7f0;
		box-shadow: 0 10px 25px rgba(245, 148, 61, 0.25);
	}

	/* ✅ CHECKBOX */
	.select-box {
		position: absolute;
		top: 12px;
		left: 12px;
		width: 20px;
		height: 20px;
		cursor: pointer;
		z-index: 50;
	}

	/* CHECK ICON */
	.check {
		position: absolute;
		top: 12px;
		right: 12px;
		background: white;
		color: #f5943d;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
	}

	/* IMAGE */
	.card img {
		width: 90px;
		height: 90px;
		border-radius: 50%;
		object-fit: cover;
		margin: 10px auto;
	}

	/* TEXT */
	.card h3 {
		margin: 8px 0 4px;
	}

	.card p {
		margin: 2px 0;
		color: #555;
		font-size: 12px;
	}

	/* BUTTONS */
	button {
		margin-top: 10px;
		padding: 8px;
		border-radius: 8px;
		border: none;
		cursor: pointer;
		background: #f5943d;
		color: white;
		transition: 0.2s;
	}

	button:hover {
		opacity: 0.9;
	}

	button.remove {
		background: #e74c3c;
	}

	button.secondary {
		background: #eee;
		color: #333;
	}

	/* ===== PREF ROW ===== */
	.pref-title {
		text-align: center;
		margin-top: 20px;
	}

	.pref-row {
		display: flex;
		gap: 12px;
		overflow-x: auto;
		padding: 15px;
		max-width: 1250px;
		margin: auto;
	}

	.pref-card {
		min-width: 110px;
		text-align: center;
	}

	.pref-card img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}

	/* prevent overlap */
	body {
		padding-bottom: 80px;
	}

	/* BUTTON DISABLED */
	.save-btn:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	/* SPINNER */
	.spinner {
		width: 16px;
		height: 16px;
		border: 2px solid white;
		border-top: 2px solid transparent;
		border-radius: 50%;
		display: inline-block;
		margin-right: 8px;
		animation: spin 0.6s linear infinite;
	}

	/* ANIMATION */
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* ANIMATION */
	@keyframes popup {
		from {
			transform: translateY(20px) scale(0.98);
			opacity: 0;
		}
		to {
			transform: translateY(0) scale(1);
			opacity: 1;
		}
	}

	/* ===== FORM GRID ===== */
	.form-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}

	/* FULL WIDTH FIELD */
	.form-group.full {
		grid-column: span 2;
	}

	/* ===== LABEL ===== */
	.form-group label {
		font-size: 12px;
		color: #666;
		margin-bottom: 5px;
	}

	/* ===== INPUT ===== */
	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 10px 12px;
		border-radius: 8px;
		border: 1px solid #ddd;
		font-size: 14px;
		transition: 0.2s;
	}

	/* FOCUS STATE */
	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		border-color: #f5943d;
		outline: none;
		box-shadow: 0 0 0 3px rgba(245, 148, 61, 0.15);
	}

	/* TEXTAREA */
	textarea {
		min-height: 100px;
		resize: vertical;
	}

	/* ===== TOAST ===== */
	.toast {
		position: fixed;
		bottom: 90px;
		left: 50%;
		transform: translateX(-50%);
		background: #333;
		color: white;
		padding: 12px 20px;
		border-radius: 8px;
		z-index: 2000;
	}

	/* ===== MOBILE ===== */
	@media (max-width: 600px) {
		.filters {
			flex-direction: column;
			align-items: stretch;
		}

		.sticky-bar {
			flex-direction: column;
		}
	}

	/* PROFILE IMAGE */
	.modal-box img {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 10px;
	}

	/* PREF GRID */
	.prefs-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
		gap: 12px;
		margin-top: 10px;
	}

	/* PREF CARD */
	.pref-card {
		text-align: center;
		position: relative;
	}

	.pref-card img {
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}

	/* RANK BADGE */
	.pref-card span {
		position: absolute;
		top: -6px;
		right: -6px;
		background: #f5943d;
		color: white;
		font-size: 10px;
		padding: 4px 6px;
		border-radius: 50%;
	}

	/* NAME */
	.pref-card p {
		font-size: 12px;
		margin-top: 4px;
	}
	/* ====================================
   MODAL OVERLAY
==================================== */

	.modal {
		position: fixed;

		inset: 0;

		width: 100%;

		height: 100%;

		background: rgba(0, 0, 0, 0.65);

		backdrop-filter: blur(4px);

		display: flex;

		justify-content: center;

		align-items: center;

		padding: 20px;

		z-index: 99999;

		overflow-y: auto;
	}

	/* ====================================
   MODAL BOX
==================================== */

	.modal-box {
		font-size: 14px;
		width: 100%;

		max-width: 1100px;

		max-height: 95vh;

		overflow-y: auto;

		background: #fff;

		border-radius: 22px;

		padding: 28px;

		position: relative;

		box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);

		animation: modalPopup 0.25s ease;
	}

	/* ====================================
   ANIMATION
==================================== */

	@keyframes modalPopup {
		from {
			opacity: 0;

			transform: translateY(25px) scale(0.96);
		}

		to {
			opacity: 1;

			transform: translateY(0) scale(1);
		}
	}

	/* ====================================
   PROFILE LAYOUT
==================================== */

	.profile-layout {
		display: grid;

		grid-template-columns: 320px 1fr;

		gap: 28px;

		align-items: start;
	}

	/* ====================================
   LEFT SIDE
==================================== */

	.profile-left {
		border-right: 1px solid #eee;

		padding-right: 24px;

		text-align: center;
	}

	/* IMAGE */

	.profile-img,
	.profile-left img {
		width: 200px;

		height: 200px;

		border-radius: 50%;

		object-fit: cover;

		margin: 0 auto 18px;

		display: block;

		border: 5px solid #fff;

		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
	}

	/* NAME */

	.profile-left h2 {
		margin-bottom: 10px;

		font-size: 30px;

		font-weight: 700;

		color: #222;
	}

	/* EMAIL */

	.sub {
		color: #777;

		margin-bottom: 20px;

		font-size: 14px;
	}

	/* INFO BLOCK */

	.info-block {
		margin-bottom: 18px;
		font-size: 14px;
		text-align: left;
	}

	.info-block span {
		display: block;
		font-size: 14px;
		margin-bottom: 4px;

		font-size: 12px;

		font-weight: 700;

		color: #f5943d;

		text-transform: uppercase;

		letter-spacing: 0.5px;
	}

	.info-block p {
		margin: 0;
		font-size: 14px;
		color: #444;

		line-height: 1.6;
	}

	/* ====================================
   RIGHT SIDE
==================================== */

	.profile-right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	/* INFO CARD */

	.info-card {
		background: #fafafa;
		border: 1px solid #eee;
		border-radius: 16px;
		padding: 22px;
	}

	.info-card h3 {
		margin-bottom: 12px;
		font-size: 18px;
		color: #f5943d;
	}

	.info-card p {
		color: #555;
		line-height: 1.7;
		font-size: 14px;
		text-align: justify;
	}

	/* DESC */

	.desc {
		text-align: justify;
		white-space: pre-line;
	}

	/* ====================================
   USER PREFS
==================================== */

	.prefs-grid {
		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));

		gap: 14px;

		margin-top: 12px;
	}

	/* PREF CARD */

	.pref-card {
		position: relative;
		text-align: center;
		padding: 25px;
	}

	.pref-card img {
		width: 65px;
		height: 65px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 6px;
	}

	.pref-card p {
		font-size: 12px;
		line-height: 1.4;
	}

	/* RANK */

	.rank {
		position: absolute;
		top: -6px;
		right: 10px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #f5943d;
		color: white;
		font-size: 11px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* ====================================
   EMPTY
==================================== */

	.empty {
		color: #888;

		text-align: center;
	}

	/* ====================================
   CLOSE BUTTON
==================================== */

	.close-btn {
		width: 100%;

		margin-top: 26px;

		padding: 14px;

		border: none;

		border-radius: 12px;

		background: #f5943d;

		color: white;

		font-size: 15px;

		font-weight: 600;

		cursor: pointer;

		transition: 0.2s ease;
	}

	.close-btn:hover {
		opacity: 0.92;

		transform: translateY(-1px);
	}

	/* ====================================
   FORM GRID
==================================== */

	.form-grid {
		display: grid;

		grid-template-columns: repeat(2, 1fr);

		gap: 18px;
	}

	/* FULL */

	.form-group.full {
		grid-column: 1 / -1;
	}

	/* ====================================
   FORM
==================================== */

	.form-group {
		display: flex;

		flex-direction: column;
	}

	.form-group label {
		margin-bottom: 6px;

		font-size: 13px;

		font-weight: 600;

		color: #444;
	}

	/* INPUTS */

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;

		padding: 12px 14px;

		border-radius: 10px;

		border: 1px solid #ddd;

		font-size: 14px;

		background: white;

		transition: 0.2s ease;
	}

	/* FOCUS */

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;

		border-color: #f5943d;

		box-shadow: 0 0 0 4px rgba(245, 148, 61, 0.15);
	}

	/* TEXTAREA */

	.form-group textarea {
		min-height: 130px;

		resize: vertical;

		line-height: 1.6;
	}

	/* ====================================
   MODAL ACTIONS
==================================== */

	.modal-actions {
		display: flex;

		gap: 14px;

		margin-top: 26px;
	}

	/* BUTTONS */

	.modal-actions button {
		flex: 1;

		border: none;

		border-radius: 10px;

		padding: 14px;

		font-size: 15px;

		font-weight: 600;

		cursor: pointer;

		transition: 0.2s ease;
	}

	/* SAVE */

	.save-btn {
		background: #f5943d;

		color: white;
	}

	/* SECONDARY */

	.modal-actions .secondary {
		background: #eee;

		color: #333;
	}

	/* DANGER */

	button.danger {
		background: #e74c3c;

		color: white;
	}

	/* HOVER */

	.modal-actions button:hover {
		opacity: 0.95;

		transform: translateY(-1px);
	}

	/* ====================================
   MOBILE
==================================== */

	@media (max-width: 768px) {
		.modal {
			padding: 10px;
		}

		.modal-box {
			padding: 18px;

			border-radius: 16px;

			max-height: 96vh;
			font-size: 14px;
		}

		.profile-layout {
			grid-template-columns: 1fr;
		}

		.profile-left {
			border-right: none;

			border-bottom: 1px solid #eee;

			padding-right: 0;

			padding-bottom: 20px;
		}

		.profile-left p {
			text-align: center;
		}

		.form-grid {
			grid-template-columns: 1fr;
		}

		.form-group.full {
			grid-column: span 1;
		}

		.modal-actions {
			flex-direction: column;
		}

		.modal-actions button {
			width: 100%;
		}
	}
</style>
