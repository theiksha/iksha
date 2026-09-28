<script>
	import { onMount } from 'svelte';

	import Header from '$lib/comps/header.svelte';

	import { db } from '$lib/firebase';

	import { collection, getDocs, doc, updateDoc, getDoc, query, where } from 'firebase/firestore';

	import { goto } from '$app/navigation';

	import bcrypt from 'bcryptjs';

	// =========================
	// STATES
	// =========================

	let profiles = [];

	let filteredProfiles = [];

	let selected = [];

	let savedPrefs = [];

	let user;

	let loading = true;

	let alreadySubmitted = false;

	let showModal = false;

	let modalData = null;

	let confirmPassword = '';

	//  TOAST
	let toast = '';

	let showToast = false;

	//  FILTERS
	let search = '';

	let selectedField = 'all';

	let scholarFilter = 'all';

	// =========================
	// COOKIE HELPERS
	// =========================

	function getCookie(name) {
		const cname = name + '=';

		const decodedCookie = decodeURIComponent(document.cookie);

		const ca = decodedCookie.split(';');

		for (let c of ca) {
			c = c.trim();

			if (c.indexOf(cname) === 0) {
				return c.substring(cname.length);
			}
		}

		return '';
	}

	function deleteCookie(name) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}

	// =========================
	// TOAST
	// =========================

	function showToastMsg(msg) {
		toast = msg;

		showToast = true;

		setTimeout(() => {
			showToast = false;
		}, 3000);
	}

	// =========================
	// FILTER LOGIC
	// =========================

	$: filteredProfiles = profiles.filter((p) => {
		const term = (search || '').toLowerCase().trim();

		// 🔍 SEARCH
		const matchSearch =
			String(p.name || '')
				.toLowerCase()
				.includes(term) ||
			String(p.institutionName || '')
				.toLowerCase()
				.includes(term) ||
			String(p.discipline || '')
				.toLowerCase()
				.includes(term) ||
			String(p.coreResearchArea || '')
				.toLowerCase()
				.includes(term);

		//  DISCIPLINE
		const matchField =
			selectedField === 'all' || String(p.discipline || '').trim() === selectedField.trim();

		//  SCHOLAR TYPE
		const scholarType = String(p.scholarType || '')
			.toLowerCase()
			.trim();

		const matchScholar = scholarFilter === 'all' || scholarType.includes(scholarFilter);

		return matchSearch && matchField && matchScholar;
	});

	// =========================
	// AUTH
	// =========================

	onMount(async () => {
		const session = getCookie('user');

		//  NO SESSION
		if (!session) {
			goto('/samiksha/login');

			return;
		}

		try {
			user = JSON.parse(session);

			//  EXPIRED
			if (Date.now() > user.expiry) {
				deleteCookie('user');

				goto('/samiksha/login');

				return;
			}

			//  LOAD DATA
			await loadProfiles();

			await loadSavedFromDB();

			loading = false;
		} catch (err) {
			console.error(err);

			deleteCookie('user');

			goto('/samiksha/login');
		}
	});

	// =========================
	// LOAD PROFILES
	// =========================

	async function loadProfiles() {
		const snap = await getDocs(collection(db, 'profiles'));

		profiles = snap.docs

			.map((d) => ({
				id: d.id,

				uid: d.data().uid || d.id,

				name: d.data().name || '',

				email: d.data().email || '',

				username: d.data().username || '',

				photo: d.data().photo || '',

				institutionName: d.data().institutionName || '',

				discipline: d.data().discipline || '',

				scholarType: d.data().scholarType || '',

				coreResearchArea: d.data().coreResearchArea || '',

				professionalBio: d.data().professionalBio || '',

				iksThemes: d.data().iksThemes || ''
			}))

			//  HIDE OWN PROFILE
			.filter((p) => String(p.uid) !== String(user?.uid));
	}

	// =========================
	// LOAD SAVED
	// =========================

	async function loadSavedFromDB() {
		const snap = await getDoc(doc(db, 'users', user.uid));

		if (!snap.exists()) return;

		const data = snap.data();

		// FIX
		alreadySubmitted = !!data.submitted;

		savedPrefs = [];

		for (let i = 1; i <= 10; i++) {
			const uid = data[`pref${i}`];

			if (!uid) continue;

			const p = profiles.find((x) => String(x.uid) === String(uid));

			if (p) {
				savedPrefs.push(p);
			}
		}

		selected = [...savedPrefs];
	}
	// =========================
	// SELECT SPEAKER
	// =========================

	function toggleSelect(profile) {
		const exists = selected.some((p) => p.uid === profile.uid);

		//  REMOVE
		if (exists) {
			selected = selected.filter((p) => p.uid !== profile.uid);

			selected = [...selected];

			return;
		}

		//  TOTAL LIMIT
		if (selected.length >= 10) {
			showToastMsg('Maximum 10 speakers allowed');

			return;
		}

		//  ADD
		selected = [...selected, profile];
	}

	// =========================
	// SELECTED CHECK
	// =========================

	function isSelected(uid) {
		return selected.some((p) => p.uid === uid);
	}

	// =========================
	// MODAL
	// =========================

	function openModal(p) {
		modalData = p;

		showModal = true;
	}

	function closeModal() {
		showModal = false;

		modalData = null;
	}

	// =========================
	// SUBMIT
	// =========================

	async function submit() {
		//  NO SELECTION
		if (selected.length === 0) {
			showToastMsg('Select at least 1 speaker');

			return;
		}

		//  EMPTY PASSWORD
		if (!confirmPassword) {
			showToastMsg('Enter password');

			return;
		}

		try {
			//  GET USER
			const q = query(
				collection(db, 'users'),

				where('uid', '==', user.uid)
			);

			const snap = await getDocs(q);

			//  USER NOT FOUND
			if (snap.empty) {
				showToastMsg('User not found');

				return;
			}

			const dbUser = snap.docs[0].data();

			//  PASSWORD CHECK
			const validPassword = await bcrypt.compare(
				confirmPassword,

				dbUser.password
			);

			//  WRONG PASSWORD
			if (!validPassword) {
				showToastMsg('Wrong password');

				return;
			}

			//  SAVE DATA
			const data = {
				submitted: true,

				pref1: '',
				pref2: '',
				pref3: '',
				pref4: '',
				pref5: '',
				pref6: '',
				pref7: '',
				pref8: '',
				pref9: '',
				pref10: ''
			};

			// SAVE PREFS
			selected.forEach((p, i) => {
				data[`pref${i + 1}`] = p.uid;
			});

			//  UPDATE FIRESTORE
			await updateDoc(
				doc(db, 'users', user.uid),

				data
			);

			//  SUCCESS
			showToastMsg('Preferences saved ');

			// CLEAR PASSWORD
			confirmPassword = '';

			// RELOAD SAVED
			await loadSavedFromDB();

			// REFRESH PAGE
			setTimeout(() => {
				window.location.reload();
			}, 1000);
		} catch (err) {
			console.error(err);

			showToastMsg('Submit failed ');
		}
	}
</script>

<h2 class="title">Speaker Profiles</h2>

{#if loading}
	<p class="center">Loading...</p>
{:else}
	<!--  FILTERS -->
	<div class="filters">
		<input type="text" placeholder="Search speaker..." bind:value={search} />
		<select bind:value={scholarFilter}>
			<option value="all"> All Scholar Types </option>

			<option value="traditional"> Traditional </option>

			<option value="contemporary"> Contemporary </option>
		</select>

		<select bind:value={selectedField}>
			<option value="all"> All Disciplines </option>

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

			<option value="Civil and Architectural Science"> Civil and Architectural Science </option>

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

	<!-- SAVED PREF -->
	<!-- {#if savedPrefs.length > 0}

  <h3 class="pref-title">
    Your Selected Preferences
  </h3>

  <div class="pref-row">

    {#each savedPrefs as p}

      <div class="pref-card">

       <img
  src={
    p.photo
      ? p.photo.includes('drive.google.com')
        ? `https://drive.google.com/thumbnail?id=${
            p.photo.match(/[-\w]{25,}/)?.[0]
          }&sz=w1000`
        : p.photo
      : 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png'
  }
  alt={p.name}
/>

        <p>{p.name}</p>

      </div>

    {/each}

  </div>

{/if} -->

	<!-- GRID -->
	<div class="grid">
		{#each filteredProfiles as p}
			{@const currentType = String(p.scholarType || '').toLowerCase()}
			{@const traditionalCount = selected.filter((x) =>
				String(x.scholarType || '')
					.toLowerCase()
					.includes('traditional')
			).length}
			{@const contemporaryCount = selected.filter((x) =>
				String(x.scholarType || '')
					.toLowerCase()
					.includes('contemporary')
			).length}
			{@const disableCard = selected.length >= 10 && !isSelected(p.uid)}

			<div class="card {isSelected(p.uid) ? 'selected' : ''} {disableCard ? 'disabled' : ''}">
				{#if isSelected(p.uid)}
					<div class="check">✔</div>
				{/if}

				<img
					src={`/images/profile/${p.username}.jpg`}
					alt={p.name}
					on:error={(e) => {
						e.target.src = '/images/profile/default-user.png';
					}}
				/>

				<h3>{p.name}</h3>

				<p>{p.institutionName}</p>

				<p class="field">
					{p.discipline}
				</p>

				{#if p.scholarType}
					<p class="scholar">
						{p.scholarType}
					</p>
				{/if}

				<button class="secondary" on:click|stopPropagation={() => openModal(p)}> Know More </button>

				<label class="select-label">
					<input
						type="checkbox"
						checked={isSelected(p.uid)}
						disabled={alreadySubmitted || (disableCard && !isSelected(p.uid))}
						on:change={() => toggleSelect(p)}
					/>

					<span>
						{isSelected(p.uid) ? 'Selected' : 'Select'}
					</span>
				</label>
			</div>
		{/each}
	</div>
{/if}

<!-- STICKY BAR -->
{#if selected.length > 0 && !alreadySubmitted}
	<div class="sticky-bar">
		<div class="counts">
			<span class="count total">
				Total:
				{selected.length}/10
			</span>
		</div>

		<input type="password" bind:value={confirmPassword} placeholder="Confirm Password" />
		{#if alreadySubmitted}
			<p class="submitted-msg">Your preferences have already been submitted.</p>
		{/if}
		{#if selected.length > 0}
			<button on:click={submit}> Submit </button>
		{/if}
	</div>
{/if}

<!-- MODAL -->
{#if showModal && modalData}
	<div class="modal" on:click={closeModal}>
		<div class="modal-box profile-modal" on:click|stopPropagation>
			<div class="profile-layout">
				<!-- LEFT SIDE -->
				<div class="profile-left">
					<img
						src={`/images/profile/${modalData.username}.jpg`}
						alt={modalData.name}
						class="profile-img"
						on:error={(e) => {
							e.target.src = '/images/profile/default-user.png';
						}}
					/>

					<h2>{modalData.name}</h2>

					{#if modalData.email}
						<p style="text-align: center;">
							{modalData.email}
						</p>
					{/if}

					{#if modalData.institutionName}
						<span>Institution</span>
						<p>
							{modalData.institutionName}
						</p>
					{/if}

					{#if modalData.discipline}
						<span>Discipline</span>
						<p>
							{modalData.discipline}
						</p>
					{/if}

					{#if modalData.scholarType}
						<span>Scholar Type</span>
						<p>
							{modalData.scholarType}
						</p>
					{/if}
				</div>

				<!-- RIGHT SIDE -->
				<div class="profile-right">
					{#if modalData.professionalBio}
						<div class="info-box">
							<h3>Brief Professional Bio</h3>

							<p class="desc">
								{modalData.professionalBio}
							</p>
						</div>
					{/if}

					{#if modalData.iksThemes}
						<div class="info-box">
							<h3>IKS Themes</h3>

							<p>
								{modalData.iksThemes}
							</p>
						</div>
					{/if}
					<div class="info-box">
						{#if modalData.coreResearchArea}
							<h3>Research Area</h3>
							<p>
								{modalData.coreResearchArea}
							</p>
						{/if}
					</div>
				</div>
			</div>

			<button class="close-btn" on:click={closeModal}> Close </button>
		</div>
	</div>
{/if}
<!-- TOAST -->

{#if showToast}
	<div class="toast">
		{toast}
	</div>
{/if}

<style>
	.profile-img {
		width: 100%;
		max-width: 420px;
		border-radius: 20px;
		object-fit: cover;
		display: block;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
	}
	/* DISABLED CARD */

	.card.disabled {
		opacity: 0.5;

		filter: grayscale(0.2);

		transform: none !important;
	}

	/* disable only unselected checkbox */
	.card.disabled .select-label input:not(:checked) {
		pointer-events: none;
	}

	/* keep selected cards clickable */
	.card.selected {
		pointer-events: auto;
	}
	.submitted-msg {
		text-align: center;
		background: #e8f7e8;
		color: #1d7a1d;
		padding: 14px;
		border-radius: 10px;
		max-width: 500px;
		margin: 20px auto;
		font-weight: 600;
	}

	/* KEEP SELECTED ACTIVE */

	.card.selected {
		pointer-events: auto;
	}
	.scholar {
		color: #f5943d;
		font-weight: 600;
		margin-top: 4px;
	}
	.select-label {
		margin-top: 12px;

		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;

		cursor: pointer;

		background: #f7f7f7;

		border-radius: 10px;

		padding: 10px;
	}

	/* ===== CHECKBOX ===== */
	.select-label input {
		width: 18px;
		height: 18px;
		cursor: pointer;
	}

	/* ===== SELECT TEXT ===== */
	.select-label span {
		font-size: 14px;
		font-weight: 600;
		color: #333;
	}

	/* ===== ACTIVE ===== */
	.card.selected .select-label {
		background: #fff3e6;
		border: 1px solid #f5943d;
	}
	/* ===== PAGE CONTAINER ===== */
	.title {
		text-align: center;
		margin-top: 100px;
	}

	.center {
		text-align: center;
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
		background: #fff3e6;
		border: 2px solid #f5943d;
		box-shadow: 0 10px 30px rgba(245, 148, 61, 0.4);
	}

	/* CHECK ICON */
	.check {
		position: absolute;
		top: 10px;
		right: 10px;
		background: #f5943d;
		color: white;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
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

	/* ===== STICKY BAR FIX ===== */
	.sticky-bar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background: white;
		padding: 12px;
		display: flex;
		justify-content: center;
		gap: 12px;
		box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	/* prevent overlap */
	body {
		padding-bottom: 80px;
	}
	/* ====================================
   MODAL OVERLAY
==================================== */

	.modal {
		position: fixed;

		inset: 0;

		width: 100%;

		height: 100%;

		background: rgba(0, 0, 0, 0.6);

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
		width: 100%;
		max-width: 950px;
		max-height: 95vh;
		overflow-y: auto;
		background: #fff;
		border-radius: 20px;
		padding: 28px;
		position: relative;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
		animation: modalPopup 0.25s ease;
	}

	/* SMALL MODAL */

	.modal-box.small {
		max-width: 380px;
		text-align: center;
	}

	/* ====================================
   ANIMATION
==================================== */

	@keyframes modalPopup {
		from {
			opacity: 0;

			transform: translateY(20px) scale(0.98);
		}

		to {
			opacity: 1;

			transform: translateY(0) scale(1);
		}
	}
	/* PROFILE MODAL */

	.profile-modal {
		max-width: 1100px;
	}

	/* 2 COLUMN LAYOUT */

	.profile-layout {
		display: grid;

		grid-template-columns: 320px 1fr;

		gap: 30px;

		align-items: start;
	}

	/* LEFT SIDE */

	.profile-left {
		border-right: 1px solid #eee;
		padding-right: 24px;
	}

	.profile-left img {
		width: 140px;
		height: 140px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: 18px;
	}

	.profile-left h2 {
		font-size: 28px;
	}

	.profile-left p {
		margin: 10px 0;
		text-align: left;
		line-height: 1.5;
	}
	.profile-left span {
		display: block;
		font-size: 14px;
		margin-bottom: 4px;
		margin-top: 10px;
		font-size: 12px;
		font-weight: 700;
		color: #f5943d;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	/* RIGHT SIDE */

	.profile-right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	/* INFO BOX */

	.info-box {
		background: #fafafa;
		font-size: 14px;
		padding: 20px;

		border-radius: 14px;

		border: 1px solid #eee;
	}

	.info-box h3 {
		color: #f5943d;
		margin-bottom: 12px;
		font-size: 18px;
	}

	.info-box p {
		line-height: 1.7;
		font-size: 14px;
		color: #555;
	}

	/* CLOSE BUTTON */

	.close-btn {
		width: 100%;

		margin-top: 24px;

		padding: 14px;

		border: none;

		border-radius: 10px;

		background: #f5943d;

		color: white;

		font-weight: 600;

		cursor: pointer;
	}

	/* MOBILE */

	@media (max-width: 768px) {
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
	}
	/* ====================================
   MODAL TITLE
==================================== */

	.modal-box h2 {
		text-align: center;
		font-size: 28px;
		font-weight: 700;
		color: #222;
	}

	/* ====================================
   PROFILE IMAGE
==================================== */

	.modal-box img {
		width: 200px;

		height: 200px;

		border-radius: 50%;

		object-fit: cover;

		display: block;

		margin: 0 auto 14px;

		border: 4px solid #fff;

		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
	}

	/* ====================================
   TEXT
==================================== */

	.modal-box p {
		margin: 6px 0;
		font-size: 14px;
		color: #555;
		text-align: justify;

		line-height: 1.5;
	}

	.modal-box .desc {
		margin-top: 12px;
		text-align: justify;
		font-size: 14px;
		line-height: 1.6;
	}

	/* ====================================
   FORM GRID
==================================== */

	.form-grid {
		display: grid;

		grid-template-columns: repeat(2, 1fr);

		gap: 18px;
	}

	/* FULL WIDTH */

	.form-group.full {
		grid-column: 1 / -1;
	}

	/* ====================================
   FORM GROUP
==================================== */

	.form-group {
		display: flex;

		flex-direction: column;
	}

	/* ====================================
   LABEL
==================================== */

	.form-group label {
		margin-bottom: 6px;

		font-size: 13px;

		font-weight: 600;

		color: #444;
	}

	/* ====================================
   INPUTS
==================================== */

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

	/* ====================================
   TEXTAREA
==================================== */

	.form-group textarea {
		min-height: 130px;

		resize: vertical;

		line-height: 1.5;
	}
	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	/* ====================================
   MODAL ACTIONS
==================================== */

	.modal-actions {
		position: sticky;

		bottom: -28px;

		background: white;

		padding-top: 20px;

		margin-top: 25px;

		display: flex;

		gap: 14px;

		border-top: 1px solid #eee;
	}

	/* ====================================
   BUTTONS
==================================== */

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

	/* DISABLED */

	.save-btn:disabled {
		opacity: 0.7;

		cursor: not-allowed;
	}

	/* ====================================
   SPINNER
==================================== */

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

	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	/* ====================================
   PREFS GRID
==================================== */

	.prefs-grid {
		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));

		gap: 12px;

		margin-top: 12px;
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

	/* RANK */

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

	/* ====================================
   TOAST
==================================== */

	.toast {
		position: fixed;

		bottom: 90px;

		left: 50%;

		transform: translateX(-50%);

		background: #222;

		color: white;

		padding: 14px 22px;

		border-radius: 12px;

		font-size: 14px;

		font-weight: 600;

		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);

		z-index: 999999;

		animation: toastIn 0.25s ease;
	}

	@keyframes toastIn {
		from {
			opacity: 0;

			transform: translateX(-50%) translateY(20px);
		}

		to {
			opacity: 1;

			transform: translateX(-50%) translateY(0);
		}
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

			border-radius: 14px;

			max-height: 96vh;
		}

		.modal-box h2 {
			font-size: 22px;
		}

		.form-grid {
			grid-template-columns: 1fr;
		}

		.form-group.full {
			grid-column: span 1;
		}

		.modal-actions {
			flex-direction: column;

			bottom: -18px;
		}

		.modal-actions button {
			width: 100%;
		}
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
</style>
