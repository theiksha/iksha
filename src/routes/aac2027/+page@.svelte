<script lang="ts">
	let activeTrackTab = 'all';
	let searchQuery = '';

	const tracks = [
		{
			id: 1,
			title: 'Ānvīkṣikī & Darśana',
			theme: 'Philosophical & Cognitive Systems',
			subthemes:
				'Nyāya-Vaiśeṣika epistemology, mind-consciousness models in Sāṅkhya, traditional Indian psychology, textual mapping of cognitive perception, and related areas.',
			chair: 'Prof. Sachchidananda Mishra',
			affiliation: 'Banaras Hindu University (BHU)',
			tag: 'Philosophy & Cognition'
		},
		{
			id: 2,
			title: 'Itihāsa & Sabhyatā',
			theme: 'Historical & Civilizational Studies',
			subthemes:
				'Reconstructing historical narratives from primary texts, Purāṇic geography, archaeology, and socio-cultural evolution of regional traditions, and related areas.',
			chair: 'Prof. Ritendra Ram Sharma',
			affiliation: 'Indus University',
			tag: 'History & Civilization'
		},
		{
			id: 3,
			title: 'Laukikaśāstra & Śaikṣaṇika',
			theme: 'Contemporary Social & Cultural Studies',
			subthemes:
				'Societal dynamics, Indian frameworks for sociological inquiry, indigenous pedagogy, traditional ethics, edutainment, digital media, gamification, digital design, social media, and entrepreneurship, and related areas.',
			chair: 'Prof. Ashish Pandey',
			affiliation: 'IIT Bombay',
			tag: 'Society & Culture'
		},
		{
			id: 4,
			title: 'Vāgvibhāga &Vāṅmaya',
			theme: 'Speech, Linguistics & Prosody',
			subthemes:
				'Aṣṭādhyāyī structure, Sphoṭa semantic theory, computational linguistics using Sanskrit grammar, structural analysis of Chandas, Kāvya, and Sāhitya, and related areas.',
			chair: 'Prof. Amba Kulkarni',
			affiliation: 'IIT Hyderabad',
			tag: 'Linguistics & Literature'
		},
		{
			id: 5,
			title: 'Rājadharma, Arthāyāma & Prabandhana',
			theme: 'Political, Economic & Strategic Thought',
			subthemes:
				'Statecraft, ancient trade networks, dharmic frameworks for corporate governance, sustainable commercial ethics, and management, and related areas.',
			chair: 'Prof. Kaushik Gangopadhyay',
			affiliation: 'IIM Kozhikode',
			tag: 'Governance & Economics'
		},
		{
			id: 6,
			title: 'Bhaiṣajya, Ārogya & Āhāra',
			theme: 'Medical, Nutrition & Pharmacological Systems',
			subthemes:
				'Āyurveda foundational principles, preventive health and therapeutics, nutritional philosophy in Dravyaguṇa, and traditional pharmacology, and related areas.',
			chair: 'Prof. P. Rammanohar',
			affiliation: 'Amrita University',
			tag: 'Health & Nutrition'
		},
		{
			id: 7,
			title: 'Gaṇita, Bhauta & Jyotiṣa',
			theme: 'Mathematical, Physical & Astronomical Sciences',
			subthemes:
				'The Kerala School of Mathematics, ancient Indian algebra/geometry, observational astronomy texts, and related areas.',
			chair: 'Prof. Venketeswara Pai',
			affiliation: 'IISER Pune',
			tag: 'Exact Sciences'
		},
		{
			id: 8,
			title: 'Kṛṣi & Paśupālya',
			theme: 'Agricultural, Ecological & Animal Husbandry Systems',
			subthemes:
				'Traditional sustainable farming (Kṛṣi-Parāśara), Vṛkṣāyurveda, ancient water management systems, and traditional veterinary care, and related areas.',
			chair: 'Prof. Ganti S. Murthy',
			affiliation: 'IIT Indore',
			tag: 'Agriculture & Ecology'
		},
		{
			id: 9,
			title: 'Kalā, Vāstu & Śilpa',
			theme: 'Performing Arts, Architecture & Design Studies',
			subthemes:
				'Nāṭyaśāstra principles, Rasa aesthetics, Vāstuśāstra, and iconography, and related areas.',
			chair: 'Prof. Ujjwala Khote',
			affiliation: 'Samrachana',
			tag: 'Arts & Architecture'
		},
		{
			id: 10,
			title: 'Samvijñānam & Praudyogikī',
			theme: 'Sciences and Engineering',
			subthemes: 'Physics, chemistry, engineering, technology, metallurgy, and related areas.',
			chair: 'Prof. V. Ramanathan',
			affiliation: 'IIT BHU',
			tag: 'Technology & Engineering'
		}
	];

	const importantDates = [
		{
			stage: 'First Round Submission',
			date: '30 November 2026',
			desc: 'Full paper along with extended abstract submission deadline',
			highlight: true
		},
		{
			stage: 'First-Round Decisions',
			date: '15 February 2027',
			desc: 'Notification of acceptance or revision requests by Review Committee',
			highlight: false
		},
		{
			stage: 'Second Round Revisions',
			date: '15 March 2027',
			desc: 'Submission of revised manuscripts addressing reviewer feedback',
			highlight: false
		},
		{
			stage: 'Second-Round Decisions',
			date: '15 April 2027',
			desc: 'Final acceptance decisions communicated to authors',
			highlight: false
		},
		{
			stage: 'Camera-Ready Submissions',
			date: '15 May 2027',
			desc: 'Final camera-ready manuscript and signed Copyright Declaration form',
			highlight: false
		},
		{
			stage: 'Conference Dates',
			date: '2 – 4 July 2027',
			desc: 'Three days of multi-track academic sessions at IIT Bombay',
			highlight: true
		}
	];

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			const yOffset = -90;
			const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
			window.scrollTo({ top: y, behavior: 'smooth' });
		}
	}

	$: filteredTracks = tracks.filter((t) => {
		const matchesSearch =
			t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			t.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
			t.subthemes.toLowerCase().includes(searchQuery.toLowerCase()) ||
			t.chair.toLowerCase().includes(searchQuery.toLowerCase()) ||
			t.affiliation.toLowerCase().includes(searchQuery.toLowerCase());
		if (activeTrackTab === 'all') return matchesSearch;
		return matchesSearch && t.tag === activeTrackTab;
	});

	const categories = [
		'all',
		'Philosophy & Cognition',
		'History & Civilization',
		'Society & Culture',
		'Linguistics & Literature',
		'Governance & Economics',
		'Health & Nutrition',
		'Exact Sciences',
		'Agriculture & Ecology',
		'Arts & Architecture',
		'Technology & Engineering'
	];
</script>

<svelte:head>
	<title
		>AAC 2027 | 3rd Annual Academic Conference on Indian Knowledge Systems | IKSHA & IIT Bombay</title
	>
	<meta
		name="description"
		content="3rd Annual Academic Conference of the Indian Knowledge Systems and Heritage Association (IKSHA) jointly organised with IIT Bombay. 2–4 July 2027 at IIT Bombay, Mumbai, India."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;0,800;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="acc-page">
	<!-- Top Notice & Header Accent -->
	<div class="top-banner-bar">
		<div class="banner-inner">
			<span class="badge-edition">3rd Annual Edition</span>
			<span class="banner-text"
				>IKSHA &bull; IIT Bombay Joint Academic Conference &bull; July 2–4, 2027</span
			>
			<a href="#dates" on:click|preventDefault={() => scrollToSection('dates')} class="banner-link"
				>Important Dates &rarr;</a
			>
		</div>
	</div>

	<!-- HERO SECTION -->
	<header class="hero-section">
		<div class="hero-bg-pattern"></div>
		<div class="acc-container hero-content">
			<div class="hero-badge-row">
				<span class="pill-badge host-badge">
					<svg
						class="pill-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
					</svg>
					Organised Jointly by IKSHA & IIT Bombay
				</span>
				<span class="pill-badge date-badge">
					<svg
						class="pill-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
						<line x1="16" y1="2" x2="16" y2="6" />
						<line x1="8" y1="2" x2="8" y2="6" />
						<line x1="3" y1="10" x2="21" y2="10" />
					</svg>
					2 – 4 July 2027
				</span>
				<span class="pill-badge venue-badge">
					<svg
						class="pill-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
						<circle cx="12" cy="10" r="3" />
					</svg>
					IIT Bombay, Mumbai
				</span>
			</div>

			<p class="hero-supertitle">
				3rd Annual Academic Conference of the Indian Knowledge Systems and Heritage Association
			</p>
			<h1 class="hero-main-title">AAC 2027</h1>
			<p class="hero-theme-title">Indian Knowledge Systems (IKS)</p>
			<p class="hero-subtitle">
				A three-day, multi-track academic conference dedicated to the rigorous, interdisciplinary
				study of classical Indic frameworks, contemporary disciplinary methods, and their continuing
				civilisational relevance.
			</p>

			<div class="hero-action-buttons">
				<a
					href="#tracks"
					on:click|preventDefault={() => scrollToSection('tracks')}
					class="btn btn-primary"
				>
					<svg
						class="btn-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<rect x="3" y="3" width="7" height="7" />
						<rect x="14" y="3" width="7" height="7" />
						<rect x="14" y="14" width="7" height="7" />
						<rect x="3" y="14" width="7" height="7" />
					</svg>
					Explore Thematic Tracks
				</a>
				<a
					href="#guidelines"
					on:click|preventDefault={() => scrollToSection('guidelines')}
					class="btn btn-outline"
				>
					<svg
						class="btn-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
						<polyline points="14 2 14 8 20 8" />
						<line x1="16" y1="13" x2="8" y2="13" />
						<line x1="16" y1="17" x2="8" y2="17" />
						<polyline points="10 9 9 9 8 9" />
					</svg>
					Manuscript Guidelines
				</a>
				<a
					href="#dates"
					on:click|preventDefault={() => scrollToSection('dates')}
					class="btn btn-ghost"
				>
					<svg
						class="btn-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<circle cx="12" cy="12" r="10" />
						<polyline points="12 6 12 12 16 14" />
					</svg>
					Important Dates
				</a>
			</div>
		</div>
	</header>

	<!-- STICKY SUB-NAVIGATION -->
	<nav class="sticky-nav">
		<div class="acc-container nav-scroll-container">
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('background')}
				>Background</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('about')}
				>About</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('objectives')}
				>Objectives</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('why-attend')}
				>Why Attend</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('audience')}
				>Audience</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('tracks')}
				>Tracks</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('chairs')}
				>Track Chairs</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('committee')}
				>Organising Team</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('guidelines')}
				>Guidelines</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('dates')}
				>Dates</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('registration')}
				>Registration</button
			>
			<button type="button" class="nav-anchor" on:click={() => scrollToSection('venue')}
				>Venue</button
			>
			<button
				type="button"
				class="nav-anchor nav-anchor-contact"
				on:click={() => scrollToSection('contact')}>Contact</button
			>
		</div>
	</nav>

	<main class="main-content">
		<!-- SECTION 1 & 2: BACKGROUND & ABOUT -->
		<section id="background" class="content-section bg-light">
			<div class="acc-container">
				<div class="two-col-grid">
					<div class="info-card highlight-card">
						<div class="card-icon-header">
							<div class="icon-circle gold-circle">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
									<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
								</svg>
							</div>
							<span class="section-tag">Section 1</span>
						</div>
						<h2 class="card-title">1. Background</h2>
						<p class="card-p">
							India’s civilisational heritage encompasses a vast and interconnected body of
							knowledge — spanning philosophy, linguistics, mathematics, astronomy, medicine,
							governance, agriculture, and the arts — developed and refined over millennia.
						</p>
						<p class="card-p">
							The <strong>Indian Knowledge Systems and Heritage Association (IKSHA)</strong>, in
							partnership with the <strong>Indian Institute of Technology Bombay (IITB)</strong>,
							has been convening an annual academic conference to bring scholars, practitioners, and
							institutions together to critically examine, document, and advance the study of these
							traditions using rigorous, contemporary academic methods.
						</p>
						<div class="edition-callout">
							<span class="edition-num">3rd</span>
							<p>
								Building on the success of its first two editions (AAC 2025 and AAC 2026), IKSHA is
								pleased to announce the 3rd Annual Academic Conference — <strong
									>IKSHA 2027 / AAC 2027</strong
								>
								— to be held from <strong>2 to 4 July 2027 at IIT Bombay</strong>.
							</p>
						</div>
					</div>

					<div id="about" class="info-card highlight-card">
						<div class="card-icon-header">
							<div class="icon-circle terra-circle">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<circle cx="12" cy="12" r="10" />
									<line x1="12" y1="16" x2="12" y2="12" />
									<line x1="12" y1="8" x2="12.01" y2="8" />
								</svg>
							</div>
							<span class="section-tag">Section 2</span>
						</div>
						<h2 class="card-title">2. About the Conference</h2>
						<p class="card-p">
							<strong>IKSHA 2027</strong> is a three-day, multi-track academic conference dedicated to
							the interdisciplinary study of Indian Knowledge Systems (IKS).
						</p>
						<p class="card-p">
							It aims to provide a rigorous scholarly platform where classical Indic frameworks — in
							philosophy, linguistics, science, medicine, statecraft, agriculture, and the arts —
							are studied on their own terms, examined against contemporary disciplinary methods,
							and explored for their continuing relevance.
						</p>

						<div class="key-facts-grid">
							<div class="fact-box">
								<span class="fact-label">Duration</span>
								<span class="fact-value">3 Days</span>
							</div>
							<div class="fact-box">
								<span class="fact-label">Thematic Tracks</span>
								<span class="fact-value">10 Tracks</span>
							</div>
							<div class="fact-box">
								<span class="fact-label">Venue</span>
								<span class="fact-value">IIT Bombay</span>
							</div>
							<div class="fact-box">
								<span class="fact-label">Dates</span>
								<span class="fact-value">2–4 July 2027</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 3: OBJECTIVES -->
		<section id="objectives" class="content-section">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Core Purpose</span>
					<h2 class="section-title">3. Objectives</h2>
					<p class="section-desc">
						Establishing a disciplined, sustained ecosystem for research, critique, and scholarship
						in Indian Knowledge Systems.
					</p>
				</div>

				<div class="objectives-grid">
					<div class="objective-card">
						<div class="obj-num">01</div>
						<h3 class="obj-title">Interdisciplinary Academic Platform</h3>
						<p class="obj-text">
							To create a rigorous academic platform for the interdisciplinary study of Indian
							Knowledge Systems across philosophy, linguistics, science, medicine, governance,
							agriculture, and the arts.
						</p>
					</div>

					<div class="objective-card">
						<div class="obj-num">02</div>
						<h3 class="obj-title">Original Textual Reconstruction</h3>
						<p class="obj-text">
							To encourage original research that reconstructs, documents, and critically evaluates
							classical Indic texts, traditions, and practices.
						</p>
					</div>

					<div class="objective-card">
						<div class="obj-num">03</div>
						<h3 class="obj-title">Dialogue Between Śāstra & Modern Disciplines</h3>
						<p class="obj-text">
							To foster dialogue between traditional scholarship (śāstra) and contemporary academic
							and scientific disciplines.
						</p>
					</div>

					<div class="objective-card">
						<div class="obj-num">04</div>
						<h3 class="obj-title">Forum for Emerging Scholars</h3>
						<p class="obj-text">
							To provide early-career researchers, doctoral scholars, and students a forum to
							present peer-reviewed work and receive expert feedback.
						</p>
					</div>

					<div class="objective-card">
						<div class="obj-num">05</div>
						<h3 class="obj-title">Global Collaborative Networks</h3>
						<p class="obj-text">
							To strengthen collaborative networks among universities, research institutions, and
							practitioners working on Indian Knowledge Systems, in India and abroad.
						</p>
					</div>

					<div class="objective-card">
						<div class="obj-num">06</div>
						<h3 class="obj-title">High-Quality Scholarly Proceedings</h3>
						<p class="obj-text">
							To publish high-quality conference proceedings that contribute lasting scholarly
							resources to the field.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 4 & 5: WHY ATTEND & TARGET AUDIENCE -->
		<section id="why-attend" class="content-section bg-light">
			<div class="acc-container">
				<div class="two-col-grid">
					<!-- WHY ATTEND -->
					<div class="benefits-container">
						<span class="section-tag">Value Proposition</span>
						<h2 class="section-title">4. Why Attend?</h2>
						<p class="section-desc">
							Experience a scholarly gathering built on academic rigor, peer engagement, and
							tangible research outputs.
						</p>

						<div class="reasons-list">
							<div class="reason-item">
								<div class="check-icon-circle">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<div class="reason-text">
									<h4>Peer-Reviewed Presentation</h4>
									<p>
										Present original research to a peer community spanning ten thematic disciplines
										and receive structured, expert review.
									</p>
								</div>
							</div>

							<div class="reason-item">
								<div class="check-icon-circle">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<div class="reason-text">
									<h4>Direct Engagement with Track Chairs</h4>
									<p>
										Engage directly with track chairs and advisory board members who are established
										authorities in their respective fields.
									</p>
								</div>
							</div>

							<div class="reason-item">
								<div class="check-icon-circle">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<div class="reason-text">
									<h4>Curated Cross-Disciplinary Programme</h4>
									<p>
										Access a curated, cross-disciplinary programme rarely available at
										single-discipline conferences.
									</p>
								</div>
							</div>

							<div class="reason-item">
								<div class="check-icon-circle">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<div class="reason-text">
									<h4>Proceedings, Awards & Recognition</h4>
									<p>
										Publish accepted work in the conference proceedings, with recognition through
										Best Paper and Best Presentation awards.
									</p>
								</div>
							</div>

							<div class="reason-item">
								<div class="check-icon-circle">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
										<polyline points="20 6 9 17 4 12" />
									</svg>
								</div>
								<div class="reason-text">
									<h4>Scholarly Community & Networking</h4>
									<p>
										Network with researchers, institutions, and practitioners committed to advancing
										Indian Knowledge Systems as a serious academic field.
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- TARGET AUDIENCE -->
					<div id="audience" class="audience-container">
						<span class="section-tag">Participation</span>
						<h2 class="section-title">5. Target Audience</h2>
						<p class="section-desc">
							IKSHA 2027 welcomes scholars, students, and practitioners across multiple domains:
						</p>

						<div class="audience-cards">
							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
										<path d="M6 12v5c3 3 9 3 12 0v-5" />
									</svg>
								</div>
								<div class="aud-info">
									<h4>Faculty & Humanities Researchers</h4>
									<p>
										Faculty and researchers in Indology, Sanskrit studies, philosophy, history,
										linguistics, and related humanities and social science disciplines.
									</p>
								</div>
							</div>

							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<path d="M10 2v7.31M14 9.3V1.99M8.5 2h7M14 9.3a6.5 6.5 0 1 1-4 0" />
									</svg>
								</div>
								<div class="aud-info">
									<h4>Scientists & Engineers</h4>
									<p>
										Working at the intersection of traditional Indian sciences (mathematics,
										astronomy, Āyurveda, metallurgy) and modern disciplines.
									</p>
								</div>
							</div>

							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
										<path d="M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								</div>
								<div class="aud-info">
									<h4>Doctoral & Postgraduate Scholars</h4>
									<p>
										Doctoral and postgraduate research scholars, and advanced undergraduate students
										pursuing IKS research.
									</p>
								</div>
							</div>

							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										/>
									</svg>
								</div>
								<div class="aud-info">
									<h4>Traditional Arts & Āyurveda Practitioners</h4>
									<p>
										Practitioners of traditional arts, architecture, Āyurveda, and allied applied
										knowledge fields.
									</p>
								</div>
							</div>

							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<rect x="3" y="3" width="18" height="18" rx="2" />
										<path d="M3 9h18" />
										<path d="M9 21V9" />
									</svg>
								</div>
								<div class="aud-info">
									<h4>Policy Makers & Heritage Institutions</h4>
									<p>
										Policy makers, cultural institutions, and heritage organisations engaged with
										Indian Knowledge Systems.
									</p>
								</div>
							</div>

							<div class="audience-card">
								<div class="aud-icon">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<circle cx="12" cy="12" r="10" />
										<line x1="2" y1="12" x2="22" y2="12" />
										<path
											d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
										/>
									</svg>
								</div>
								<div class="aud-info">
									<h4>International Scholars</h4>
									<p>
										International scholars and institutions working on comparative and
										cross-cultural knowledge traditions.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 6: THEMATIC TRACKS -->
		<section id="tracks" class="content-section">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Call for Papers</span>
					<h2 class="section-title">6. Thematic Tracks</h2>
					<p class="section-desc">
						IKSHA 2027 is structured around <strong>ten thematic tracks</strong>. Authors and
						participants are invited to submit contributions aligned with one or more tracks.
					</p>
				</div>

				<!-- Track Filter & Search Controls -->
				<div class="track-controls">
					<div class="search-input-wrap">
						<svg
							class="search-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="11" cy="11" r="8" />
							<line x1="21" y1="21" x2="16.65" y2="16.65" />
						</svg>
						<input
							type="text"
							placeholder="Search by topic, Sanskrit title, sub-theme, or chair name..."
							bind:value={searchQuery}
							class="track-search-input"
						/>
					</div>

					<div class="track-pills-bar">
						{#each categories as cat}
							<button
								type="button"
								class="cat-pill"
								class:active={activeTrackTab === cat}
								on:click={() => (activeTrackTab = cat)}
							>
								{cat === 'all' ? 'All 10 Tracks' : cat}
							</button>
						{/each}
					</div>
				</div>

				<!-- Tracks Grid -->
				<div class="tracks-grid">
					{#each filteredTracks as track}
						<div class="track-card">
							<div class="track-header">
								<div class="track-num-badge">Track {track.id}</div>
								<span class="track-tag-badge">{track.tag}</span>
							</div>

							<h3 class="track-sanskrit-title">{track.title}</h3>
							<h4 class="track-theme-title">{track.theme}</h4>

							<div class="track-divider"></div>

							<div class="track-subthemes-box">
								<span class="subthemes-label">Sub-themes:</span>
								<p class="subthemes-content">{track.subthemes}</p>
							</div>

							<div class="track-chair-box">
								<div class="chair-avatar-placeholder">
									{track.chair
										.split(' ')
										.map((n) => n[0])
										.join('')
										.slice(0, 2)}
								</div>
								<div class="chair-details">
									<span class="chair-role-label">Suggested Chair</span>
									<span class="chair-name">{track.chair}</span>
									<span class="chair-inst">{track.affiliation}</span>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- SECTION 7: TRACK CHAIRS SUMMARY -->
		<section id="chairs" class="content-section bg-light">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Academic Leadership</span>
					<h2 class="section-title">7. Suggested Track Chairs</h2>
					<p class="section-desc">
						Eminent scholars and academicians guiding each thematic track at AAC 2027.
					</p>
				</div>

				<div class="chairs-table-wrap">
					<table class="chairs-table">
						<thead>
							<tr>
								<th>Track</th>
								<th>Thematic Track Title</th>
								<th>Suggested Chair</th>
								<th>Affiliation</th>
							</tr>
						</thead>
						<tbody>
							{#each tracks as item}
								<tr>
									<td class="td-track">Track {item.id}</td>
									<td class="td-title">
										<strong>{item.title}</strong>
										<span class="table-sub">{item.theme}</span>
									</td>
									<td class="td-chair">{item.chair}</td>
									<td class="td-affil">
										<span class="affil-chip">{item.affiliation}</span>
									</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		</section>

		<!-- SECTION 8: ORGANISING TEAM -->
		<section id="committee" class="content-section">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Conference Governance</span>
					<h2 class="section-title">8. Conference Organising Team</h2>
					<p class="section-desc">
						Joint leadership from the Indian Knowledge Systems and Heritage Association (IKSHA) and
						the Indian Institute of Technology Bombay (IITB).
					</p>
				</div>

				<div class="team-hierarchy">
					<!-- PATRONS -->
					<div class="team-group">
						<h3 class="group-heading">Patrons</h3>
						<div class="team-cards-row">
							<div class="team-member-card">
								<div class="member-role-chip">Patron</div>
								<h4 class="member-name">Shri Manohar Shinde</h4>
								<span class="member-org">IKSHA</span>
							</div>
							<div class="team-member-card">
								<div class="member-role-chip">Patron</div>
								<h4 class="member-name">Prof. Shireesh Kedare</h4>
								<span class="member-org">IIT Bombay</span>
							</div>
						</div>
					</div>

					<!-- SECRETARIES -->
					<div class="team-group">
						<h3 class="group-heading">Conference Secretaries</h3>
						<div class="team-cards-row">
							<div class="team-member-card">
								<div class="member-role-chip">Conference Secretary</div>
								<h4 class="member-name">Prof. Sampadananda Mishra</h4>
								<span class="member-org">IKSHA</span>
							</div>
							<div class="team-member-card">
								<div class="member-role-chip">Conference Secretary</div>
								<h4 class="member-name">Prof. Lalitha Sarma</h4>
								<span class="member-org">IIT Bombay</span>
							</div>
						</div>
					</div>

					<!-- CONVENERS -->
					<div class="team-group">
						<h3 class="group-heading">Conveners</h3>
						<div class="team-cards-row">
							<div class="team-member-card">
								<div class="member-role-chip">Convener</div>
								<h4 class="member-name">Prof. Arnab Bhattacharya</h4>
								<span class="member-org">IKSHA</span>
							</div>
							<div class="team-member-card">
								<div class="member-role-chip">Convener</div>
								<h4 class="member-name">Prof. K. Ramasubramanian</h4>
								<span class="member-org">IIT Bombay</span>
							</div>
						</div>
					</div>

					<!-- CO-CONVENERS -->
					<div class="team-group">
						<h3 class="group-heading">Co-Conveners</h3>
						<div class="team-cards-row">
							<div class="team-member-card">
								<div class="member-role-chip">Co-Convener</div>
								<h4 class="member-name">Prof. Yugank Goyal</h4>
								<span class="member-org">IKSHA</span>
							</div>
							<div class="team-member-card">
								<div class="member-role-chip">Co-Convener</div>
								<h4 class="member-name">Prof. Varadaraj Bapat</h4>
								<span class="member-org">IIT Bombay</span>
							</div>
						</div>
					</div>

					<!-- CORE ORGANISING COMMITTEE -->
					<div class="team-group">
						<h3 class="group-heading">Core Organising Committee</h3>
						<div class="core-committee-box">
							<div class="subgroup-box">
								<span class="subgroup-title">IKSHA Representatives</span>
								<div class="members-tag-cloud">
									<span class="member-tag">Anurag Tripathi</span>
									<span class="member-tag">Aditya Maheshwari</span>
									<span class="member-tag">Ashish Pandey</span>
									<span class="member-tag">Shivakumar G V</span>
									<span class="member-tag">Smita Singh</span>
									<span class="member-tag">Harsha Simha</span>
									<span class="member-tag">Srikant</span>
								</div>
							</div>

							<div class="subgroup-box">
								<span class="subgroup-title">IIT Bombay Representatives</span>
								<div class="members-tag-cloud">
									<span class="member-tag">Sandeep</span>
									<span class="member-tag">Chariar</span>
									<span class="member-tag">Ashish Karn</span>
								</div>
							</div>
						</div>
					</div>

					<div class="announcement-notice-box">
						<svg
							class="notice-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="10" />
							<line x1="12" y1="8" x2="12" y2="12" />
							<line x1="12" y1="16" x2="12.01" y2="16" />
						</svg>
						<p>
							International Advisory Committee, National Advisory Board, and Eminent Speakers will
							be announced shortly.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 9: MANUSCRIPT PREPARATION GUIDELINES -->
		<section id="guidelines" class="content-section bg-light">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Author Instructions</span>
					<h2 class="section-title">9. Manuscript Preparation Guidelines</h2>
					<p class="section-desc">
						Please review the submission formats, review policies, and academic integrity guidelines
						thoroughly prior to submitting your work.
					</p>
				</div>

				<div class="guidelines-grid">
					<!-- Card 1: Paper Submission -->
					<div class="guideline-card">
						<div class="guide-card-header">
							<div class="guide-icon-wrap">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<polyline points="14 2 14 8 20 8" />
									<line x1="12" y1="18" x2="12" y2="12" />
									<line x1="9" y1="15" x2="15" y2="15" />
								</svg>
							</div>
							<h3>Paper Submission</h3>
						</div>
						<ul class="guide-bullets">
							<li>Submit the full paper along with an extended abstract.</li>
							<li>Manuscripts must be submitted in <strong>PDF format</strong>.</li>
							<li>
								The manuscript must be original, unpublished, and not under consideration elsewhere.
							</li>
							<li>
								<strong>AI Policy:</strong> Use of AI tools is strictly limited to formatting and paraphrasing
								only.
							</li>
						</ul>
					</div>

					<!-- Card 2: Manuscript Format -->
					<div class="guideline-card">
						<div class="guide-card-header">
							<div class="guide-icon-wrap">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<polyline points="4 7 4 4 20 4 20 7" />
									<line x1="9" y1="20" x2="15" y2="20" />
									<line x1="12" y1="4" x2="12" y2="20" />
								</svg>
							</div>
							<h3>Manuscript Format</h3>
						</div>
						<ul class="guide-bullets">
							<li>
								<strong>Format:</strong> A4 page size, single spacing, 12-point Times New Roman font,
								standard margins.
							</li>
							<li>
								<strong>Author Details:</strong> Full name, designation, institutional affiliation, email
								address, and mobile number.
							</li>
							<li>Do not include any additional biographical information.</li>
							<li><strong>Language:</strong> Papers must be written in English.</li>
						</ul>
					</div>

					<!-- Card 3: Review Process & Academic Standards -->
					<div class="guideline-card">
						<div class="guide-card-header">
							<div class="guide-icon-wrap">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
									<circle cx="8.5" cy="7" r="4" />
									<polyline points="17 11 19 13 23 9" />
								</svg>
							</div>
							<h3>Review Process & Standards</h3>
						</div>
						<ul class="guide-bullets">
							<li>
								All submissions will undergo rigorous peer review by the Conference Review
								Committee.
							</li>
							<li>
								Authors may be asked to revise manuscripts based on reviewer comments prior to final
								acceptance.
							</li>
							<li>
								Papers should demonstrate originality, academic rigor, and adherence to ethical
								research practices.
							</li>
							<li>
								Manuscripts not complying with prescribed guidelines may be rejected without review.
							</li>
						</ul>
					</div>

					<!-- Card 4: Copyright & Presentation -->
					<div class="guideline-card">
						<div class="guide-card-header">
							<div class="guide-icon-wrap">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
									<circle cx="12" cy="12" r="10" />
									<path d="M15 9.354a4 4 0 1 0 0 5.292" />
								</svg>
							</div>
							<h3>Copyright & Presentation</h3>
						</div>
						<ul class="guide-bullets">
							<li>
								Authors must submit a signed <strong>Copyright Declaration Form</strong> along with the
								final manuscript.
							</li>
							<li>Submitted work must be original and free from plagiarism.</li>
							<li>Only accepted papers will be scheduled for presentation.</li>
							<li>
								Each accepted paper will be allotted either an <strong
									>oral presentation slot</strong
								>
								or a <strong>poster slot</strong>.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 10: IMPORTANT DATES -->
		<section id="dates" class="content-section">
			<div class="acc-container">
				<div class="section-heading-wrap text-center">
					<span class="section-tag">Deadlines & Schedule</span>
					<h2 class="section-title">10. Important Dates</h2>
					<p class="section-desc">
						Key milestones for paper submission, evaluation rounds, and conference proceedings.
					</p>
				</div>

				<div class="timeline-container">
					{#each importantDates as item, i}
						<div class="timeline-item" class:highlight-item={item.highlight}>
							<div class="timeline-marker">
								<div class="marker-dot"></div>
								{#if i !== importantDates.length - 1}
									<div class="marker-line"></div>
								{/if}
							</div>
							<div class="timeline-card">
								<div class="t-card-header">
									<span class="stage-tag">{item.stage}</span>
									<span class="date-badge-pill">{item.date}</span>
								</div>
								<p class="stage-desc">{item.desc}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- SECTION 11 & 12: REGISTRATION & PUBLICATIONS/AWARDS -->
		<section id="registration" class="content-section bg-light">
			<div class="acc-container">
				<div class="two-col-grid">
					<!-- REGISTRATION -->
					<div class="reg-policy-card">
						<span class="section-tag">Participation</span>
						<h2 class="section-title">11. Registration</h2>
						<p class="section-desc">Participation in IKSHA 2027 requires prior registration.</p>

						<div class="fee-includes-box">
							<h4>Registration Fee Covers:</h4>
							<div class="includes-grid">
								<div class="inc-pill">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<polyline points="20 6 9 17 4 12" />
									</svg>
									Conference Kit
								</div>
								<div class="inc-pill">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<polyline points="20 6 9 17 4 12" />
									</svg>
									Access to All Sessions
								</div>
								<div class="inc-pill">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<polyline points="20 6 9 17 4 12" />
									</svg>
									Lunches
								</div>
								<div class="inc-pill">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<polyline points="20 6 9 17 4 12" />
									</svg>
									Conference Proceedings
								</div>
							</div>
						</div>

						<div class="policy-notes">
							<p class="policy-note-item">
								<strong>Fee Categories:</strong> Category-wise fee details (International Delegates /
								Faculty / Working Professionals; Research Scholars / Ph.D. Students / Retired Professionals;
								UG/PG Students) along with Early-Bird and standard rates will be notified separately.
							</p>
							<p class="policy-note-item">
								<strong>Non-refundable:</strong> The registration fee is non-refundable and non-transferable.
							</p>
							<p class="policy-note-item">
								<strong>Accommodation:</strong> The registration fee does not include accommodation.
								Accommodation will be arranged upon prior request, subject to availability, on a sharing
								basis.
							</p>
							<p class="policy-note-item">
								<strong>Confirmation:</strong> Registration will be confirmed only after the completed
								registration form and full payment have been received.
							</p>
							<p class="policy-note-item">
								<strong>Student Verification:</strong> Students and Research Scholars must produce a
								valid Student ID card at the time of registration to avail the applicable category.
							</p>
							<p class="policy-note-item">
								<strong>Programme Changes:</strong> The organising committee reserves the right to modify
								the conference programme, schedule, or arrangements, if required.
							</p>
						</div>
					</div>

					<!-- PUBLICATIONS & AWARDS -->
					<div id="awards" class="awards-wrapper">
						<span class="section-tag">Recognition & Output</span>
						<h2 class="section-title">12. Publications and Awards</h2>
						<p class="section-desc">
							Selected papers presented at the conference will be considered for publication in the
							conference proceedings (details to be announced).
						</p>

						<div class="awards-cards-column">
							<div class="award-card gold-award">
								<div class="award-icon-box">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<circle cx="12" cy="8" r="7" />
										<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
									</svg>
								</div>
								<div class="award-info">
									<h3>Best Paper Award</h3>
									<p>
										Presented to top-rated original scholarly papers across tracks demonstrating
										highest research rigor and novel contributions.
									</p>
								</div>
							</div>

							<div class="award-card amber-award">
								<div class="award-icon-box">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<polygon
											points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
										/>
									</svg>
								</div>
								<div class="award-info">
									<h3>Best Presentation Award</h3>
									<p>
										Awarded to outstanding oral presentations evaluated on clarity, scholarly
										engagement, and critical defense.
									</p>
								</div>
							</div>

							<div class="award-card poster-award">
								<div class="award-icon-box">
									<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
										<rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
										<line x1="8" y1="21" x2="16" y2="21" />
										<line x1="12" y1="17" x2="12" y2="21" />
									</svg>
								</div>
								<div class="award-info">
									<h3>Poster Presentations</h3>
									<p>
										Featured as an integral part of the conference programme, providing an
										interactive showcase for early findings and visual analyses.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 13 & 14: VENUE & CONTACT INFORMATION -->
		<section id="venue" class="content-section">
			<div class="acc-container">
				<div class="two-col-grid">
					<!-- VENUE -->
					<div class="venue-card">
						<span class="section-tag">Location</span>
						<h2 class="section-title">13. Venue</h2>
						<p class="venue-name">Indian Institute of Technology Bombay (IIT Bombay)</p>
						<p class="venue-sub">Powai, Mumbai, Maharashtra 400076, India</p>

						<div class="venue-meta-box">
							<div class="meta-row">
								<svg
									class="meta-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
									<circle cx="12" cy="10" r="3" />
								</svg>
								<span>Powai, Mumbai — serene campus nestled between Powai & Vihar lakes</span>
							</div>
							<div class="meta-row">
								<svg
									class="meta-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<line x1="3" y1="10" x2="21" y2="10" />
								</svg>
								<span>Conference Dates: 2 – 4 July 2027</span>
							</div>
						</div>

						<p class="venue-description">
							IIT Bombay is an internationally renowned institute of national importance, located in
							Powai, Mumbai. With premier academic infrastructure, lecture theatres, and research
							facilities, it provides an inspiring venue for interdisciplinary deliberations on
							Indian Knowledge Systems.
						</p>

						<a
							href="https://maps.google.com/?q=IIT+Bombay+Powai+Mumbai"
							target="_blank"
							rel="noopener noreferrer"
							class="btn btn-outline btn-sm"
						>
							<svg
								class="btn-icon"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
								<line x1="8" y1="2" x2="8" y2="18" />
								<line x1="16" y1="6" x2="16" y2="22" />
							</svg>
							Open Campus Location on Google Maps
						</a>
					</div>

					<!-- CONTACT INFORMATION -->
					<div id="contact" class="contact-card">
						<span class="section-tag">Secretariat</span>
						<h2 class="section-title">14. Contact Information</h2>
						<p class="contact-lead">
							For further information and queries regarding paper submission, registration,
							sponsorship, or academic partnerships, please reach out to the conference team.
						</p>

						<div class="contact-highlight-box">
							<div class="contact-icon-large">
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									/>
									<polyline points="22,6 12,13 2,6" />
								</svg>
							</div>
							<div class="contact-details">
								<span class="sec-label">IKSHA 2027 Conference Secretariat</span>
								<a href="mailto:conference@theiksha.org" class="sec-email"
									>conference@theiksha.org</a
								>
								<span class="sec-note">Response time typically within 24-48 hours</span>
							</div>
						</div>

						<div class="contact-actions">
							<a
								href="mailto:conference@theiksha.org?subject=Query%20regarding%20IKSHA%20AAC%202027"
								class="btn btn-primary"
							>
								<svg
									class="btn-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<line x1="22" y1="2" x2="11" y2="13" />
									<polygon points="22 2 15 22 11 13 2 9 22 2" />
								</svg>
								Email Conference Secretariat
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>
</div>

<style>
	/* =========================================================
	   CSS VARIABLES & DESIGN TOKENS
	   ========================================================= */
	:root {
		--acc-primary: #d97706;
		--acc-primary-dark: #b45309;
		--acc-primary-light: #fef3c7;
		--acc-earth: #78350f;
		--acc-dark: #1e1b18;
		--acc-charcoal: #2c2520;
		--acc-muted: #5c554e;
		--acc-light-muted: #8b8076;
		--acc-bg: #fcfbf9;
		--acc-bg-alt: #f8f5ee;
		--acc-border: #e8e2d8;
		--acc-shadow-sm: 0 2px 8px rgba(44, 37, 32, 0.04);
		--acc-shadow-md: 0 8px 24px rgba(44, 37, 32, 0.08);
		--acc-radius: 12px;
		--acc-radius-sm: 6px;
	}

	.acc-page {
		font-family:
			'Plus Jakarta Sans',
			system-ui,
			-apple-system,
			sans-serif;
		color: var(--acc-charcoal);
		background-color: var(--acc-bg);
		line-height: 1.6;
		overflow-x: hidden;
		box-sizing: border-box;
	}

	.acc-page *,
	.acc-page *::before,
	.acc-page *::after {
		box-sizing: border-box;
	}

	.acc-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
	}

	/* =========================================================
	   TOP BANNER BAR
	   ========================================================= */
	.top-banner-bar {
		background: linear-gradient(90deg, #b45309 0%, #d97706 100%);
		color: #ffffff;
		font-size: 0.85rem;
		padding: 8px 0;
		position: relative;
		z-index: 100;
	}

	.banner-inner {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		flex-wrap: wrap;
		text-align: center;
	}

	.badge-edition {
		background: rgba(255, 255, 255, 0.2);
		padding: 2px 10px;
		border-radius: 999px;
		font-weight: 700;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-size: 0.75rem;
	}

	.banner-text {
		font-weight: 500;
	}

	.banner-link {
		color: #fff;
		text-decoration: underline;
		font-weight: 600;
		cursor: pointer;
	}

	/* =========================================================
	   HERO SECTION
	   ========================================================= */
	.hero-section {
		position: relative;
		background: linear-gradient(175deg, #fdfaf6 0%, #f7f1e6 100%);
		border-bottom: 1px solid var(--acc-border);
		padding: 70px 0 80px;
		text-align: center;
		overflow: hidden;
	}

	.hero-bg-pattern {
		position: absolute;
		inset: 0;
		background-image: radial-gradient(#d97706 0.75px, transparent 0.75px);
		background-size: 24px 24px;
		opacity: 0.08;
		pointer-events: none;
	}

	.hero-content {
		position: relative;
		z-index: 2;
		max-width: 960px;
	}

	.hero-badge-row {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 12px;
		flex-wrap: wrap;
		margin-bottom: 24px;
	}

	.pill-badge {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 0.85rem;
		font-weight: 600;
		padding: 6px 14px;
		border-radius: 999px;
		border: 1px solid transparent;
	}

	.host-badge {
		background: #fef3c7;
		color: #92400e;
		border-color: #fde68a;
	}

	.date-badge {
		background: #ffedd5;
		color: #9a3412;
		border-color: #fed7aa;
	}

	.venue-badge {
		background: #f1f5f9;
		color: #334155;
		border-color: #e2e8f0;
	}

	.pill-icon {
		width: 15px;
		height: 15px;
	}

	.hero-supertitle {
		font-size: 1.05rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--acc-primary-dark);
		margin-bottom: 12px;
	}

	.hero-main-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(2.8rem, 6vw, 4.5rem);
		font-weight: 800;
		color: var(--acc-dark);
		line-height: 1.1;
		margin: 0 0 10px;
		letter-spacing: -0.02em;
	}

	.hero-theme-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.4rem, 3vw, 2.1rem);
		font-weight: 600;
		color: var(--acc-earth);
		margin: 0 0 20px;
		font-style: italic;
	}

	.hero-subtitle {
		font-size: 1.15rem;
		color: var(--acc-muted);
		max-width: 780px;
		margin: 0 auto 36px;
		line-height: 1.7;
	}

	.hero-action-buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 16px;
		flex-wrap: wrap;
	}

	/* Buttons */
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 12px 26px;
		font-size: 0.95rem;
		font-weight: 600;
		border-radius: var(--acc-radius-sm);
		text-decoration: none;
		cursor: pointer;
		transition: all 0.2s ease;
		border: 1px solid transparent;
	}

	.btn-icon {
		width: 17px;
		height: 17px;
	}

	.btn-primary {
		background-color: var(--acc-primary);
		color: #ffffff;
		box-shadow: 0 4px 14px rgba(217, 119, 6, 0.35);
	}

	.btn-primary:hover {
		background-color: var(--acc-primary-dark);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(217, 119, 6, 0.45);
	}

	.btn-outline {
		background-color: #ffffff;
		color: var(--acc-charcoal);
		border-color: var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.btn-outline:hover {
		border-color: var(--acc-primary);
		color: var(--acc-primary);
		transform: translateY(-2px);
	}

	.btn-ghost {
		background-color: transparent;
		color: var(--acc-charcoal);
		border-color: transparent;
	}

	.btn-ghost:hover {
		background-color: rgba(0, 0, 0, 0.05);
	}

	.btn-sm {
		padding: 8px 18px;
		font-size: 0.85rem;
	}

	/* =========================================================
	   STICKY SUB-NAVIGATION
	   ========================================================= */
	.sticky-nav {
		position: sticky;
		top: 80px;
		background: #ffffff;
		border-bottom: 1px solid var(--acc-border);
		z-index: 900;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
	}

	.nav-scroll-container {
		display: flex;
		align-items: center;
		gap: 6px;
		overflow-x: auto;
		white-space: nowrap;
		padding: 10px 24px;
		scrollbar-width: none;
	}

	.nav-scroll-container::-webkit-scrollbar {
		display: none;
	}

	.nav-anchor {
		background: none;
		border: none;
		padding: 7px 14px;
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--acc-muted);
		cursor: pointer;
		transition: all 0.15s ease;
		font-family: inherit;
	}

	.nav-anchor:hover {
		background-color: var(--acc-bg-alt);
		color: var(--acc-primary);
	}

	.nav-anchor-contact {
		background-color: var(--acc-primary-light);
		color: var(--acc-primary-dark);
		margin-left: auto;
	}

	.nav-anchor-contact:hover {
		background-color: var(--acc-primary);
		color: #ffffff;
	}

	/* =========================================================
	   SECTION STRUCTURE & TYPOGRAPHY
	   ========================================================= */
	.content-section {
		padding: 75px 0;
	}

	.bg-light {
		background-color: var(--acc-bg-alt);
	}

	.section-heading-wrap {
		margin-bottom: 50px;
	}

	.text-center {
		text-align: center;
	}

	.section-tag {
		display: inline-block;
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--acc-primary-dark);
		background-color: var(--acc-primary-light);
		padding: 4px 12px;
		border-radius: 4px;
		margin-bottom: 10px;
	}

	.section-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: clamp(1.9rem, 3.5vw, 2.5rem);
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 12px;
	}

	.section-desc {
		font-size: 1.05rem;
		color: var(--acc-muted);
		max-width: 680px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.two-col-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 36px;
	}

	/* =========================================================
	   SECTION 1 & 2: INFO CARDS
	   ========================================================= */
	.info-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 40px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.card-icon-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
	}

	.icon-circle {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-circle svg {
		width: 22px;
		height: 22px;
	}

	.gold-circle {
		background: #fef3c7;
		color: #d97706;
	}

	.terra-circle {
		background: #ffedd5;
		color: #c2410c;
	}

	.card-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 16px;
	}

	.card-p {
		font-size: 0.98rem;
		color: var(--acc-charcoal);
		margin-bottom: 16px;
		line-height: 1.7;
	}

	.edition-callout {
		display: flex;
		align-items: center;
		gap: 16px;
		background: #fffbeb;
		border-left: 4px solid var(--acc-primary);
		padding: 16px 20px;
		border-radius: 0 var(--acc-radius-sm) var(--acc-radius-sm) 0;
		margin-top: 24px;
	}

	.edition-num {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--acc-primary);
		line-height: 1;
	}

	.edition-callout p {
		margin: 0;
		font-size: 0.92rem;
		color: #78350f;
		line-height: 1.5;
	}

	.key-facts-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 14px;
		margin-top: 24px;
	}

	.fact-box {
		background: var(--acc-bg);
		border: 1px solid var(--acc-border);
		border-radius: var(--acc-radius-sm);
		padding: 14px 16px;
		display: flex;
		flex-direction: column;
	}

	.fact-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		font-weight: 600;
		letter-spacing: 0.05em;
		color: var(--acc-light-muted);
	}

	.fact-value {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin-top: 4px;
	}

	/* =========================================================
	   SECTION 3: OBJECTIVES
	   ========================================================= */
	.objectives-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
		gap: 24px;
	}

	.objective-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 30px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		transition: all 0.2s ease;
		position: relative;
	}

	.objective-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--acc-shadow-md);
		border-color: #fed7aa;
	}

	.obj-num {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 2rem;
		font-weight: 800;
		color: var(--acc-primary);
		opacity: 0.4;
		line-height: 1;
		margin-bottom: 12px;
	}

	.obj-title {
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 12px;
	}

	.obj-text {
		font-size: 0.95rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.65;
	}

	/* =========================================================
	   SECTION 4 & 5: WHY ATTEND & TARGET AUDIENCE
	   ========================================================= */
	.reasons-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 24px;
	}

	.reason-item {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.check-icon-circle {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: #fef3c7;
		color: #d97706;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		margin-top: 2px;
	}

	.check-icon-circle svg {
		width: 18px;
		height: 18px;
	}

	.reason-text h4 {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 4px;
	}

	.reason-text p {
		font-size: 0.92rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.55;
	}

	.audience-cards {
		display: grid;
		grid-template-columns: 1fr;
		gap: 16px;
		margin-top: 24px;
	}

	.audience-card {
		display: flex;
		gap: 16px;
		align-items: flex-start;
		background: #ffffff;
		padding: 18px 20px;
		border-radius: var(--acc-radius-sm);
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.aud-icon {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: var(--acc-bg-alt);
		color: var(--acc-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.aud-icon svg {
		width: 22px;
		height: 22px;
	}

	.aud-info h4 {
		font-size: 0.98rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 4px;
	}

	.aud-info p {
		font-size: 0.88rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.5;
	}

	/* =========================================================
	   SECTION 6: THEMATIC TRACKS
	   ========================================================= */
	.track-controls {
		margin-bottom: 36px;
	}

	.search-input-wrap {
		position: relative;
		max-width: 600px;
		margin: 0 auto 20px;
	}

	.search-icon {
		position: absolute;
		left: 16px;
		top: 50%;
		transform: translateY(-50%);
		width: 18px;
		height: 18px;
		color: var(--acc-light-muted);
	}

	.track-search-input {
		width: 100%;
		padding: 13px 16px 13px 44px;
		border-radius: 999px;
		border: 1px solid var(--acc-border);
		background: #ffffff;
		font-size: 0.92rem;
		font-family: inherit;
		outline: none;
		transition: all 0.2s ease;
		box-shadow: var(--acc-shadow-sm);
	}

	.track-search-input:focus {
		border-color: var(--acc-primary);
		box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.15);
	}

	.track-pills-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		gap: 8px;
	}

	.cat-pill {
		background: #ffffff;
		border: 1px solid var(--acc-border);
		padding: 6px 14px;
		border-radius: 999px;
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--acc-muted);
		cursor: pointer;
		transition: all 0.15s ease;
		font-family: inherit;
	}

	.cat-pill:hover {
		border-color: var(--acc-primary);
		color: var(--acc-primary);
	}

	.cat-pill.active {
		background-color: var(--acc-primary);
		color: #ffffff;
		border-color: var(--acc-primary);
	}

	.tracks-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 24px;
	}

	.track-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 28px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		display: flex;
		flex-direction: column;
		transition: all 0.2s ease;
	}

	.track-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--acc-shadow-md);
		border-color: #fed7aa;
	}

	.track-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 14px;
	}

	.track-num-badge {
		font-size: 0.78rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		background: #fff7ed;
		color: #c2410c;
		padding: 4px 10px;
		border-radius: 4px;
		border: 1px solid #ffedd5;
	}

	.track-tag-badge {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--acc-light-muted);
		background: var(--acc-bg);
		padding: 3px 8px;
		border-radius: 4px;
	}

	.track-sanskrit-title {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 6px;
		line-height: 1.3;
	}

	.track-theme-title {
		font-size: 0.98rem;
		font-weight: 600;
		color: var(--acc-primary-dark);
		margin: 0 0 16px;
	}

	.track-divider {
		height: 1px;
		background-color: var(--acc-border);
		margin-bottom: 16px;
	}

	.track-subthemes-box {
		flex: 1;
		margin-bottom: 20px;
	}

	.subthemes-label {
		font-size: 0.78rem;
		font-weight: 700;
		text-transform: uppercase;
		color: var(--acc-light-muted);
		letter-spacing: 0.05em;
		display: block;
		margin-bottom: 6px;
	}

	.subthemes-content {
		font-size: 0.9rem;
		color: var(--acc-muted);
		line-height: 1.6;
		margin: 0;
	}

	.track-chair-box {
		display: flex;
		align-items: center;
		gap: 12px;
		background: var(--acc-bg);
		border-radius: var(--acc-radius-sm);
		padding: 12px 14px;
		border: 1px solid var(--acc-border);
	}

	.chair-avatar-placeholder {
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background: var(--acc-primary-light);
		color: var(--acc-primary-dark);
		font-weight: 700;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.chair-details {
		display: flex;
		flex-direction: column;
		line-height: 1.3;
	}

	.chair-role-label {
		font-size: 0.72rem;
		text-transform: uppercase;
		font-weight: 700;
		color: var(--acc-light-muted);
		letter-spacing: 0.04em;
	}

	.chair-name {
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--acc-dark);
	}

	.chair-inst {
		font-size: 0.78rem;
		color: var(--acc-muted);
	}

	/* =========================================================
	   SECTION 7: TRACK CHAIRS TABLE
	   ========================================================= */
	.chairs-table-wrap {
		background: #ffffff;
		border-radius: var(--acc-radius);
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		overflow-x: auto;
	}

	.chairs-table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
		font-size: 0.92rem;
	}

	.chairs-table th {
		background: var(--acc-bg-alt);
		padding: 16px 20px;
		font-weight: 700;
		color: var(--acc-dark);
		border-bottom: 2px solid var(--acc-border);
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.chairs-table td {
		padding: 16px 20px;
		border-bottom: 1px solid var(--acc-border);
		vertical-align: middle;
	}

	.chairs-table tbody tr:last-child td {
		border-bottom: none;
	}

	.chairs-table tbody tr:hover {
		background-color: var(--acc-bg);
	}

	.td-track {
		font-weight: 700;
		color: var(--acc-primary-dark);
		white-space: nowrap;
	}

	.td-title {
		line-height: 1.35;
	}

	.table-sub {
		display: block;
		font-size: 0.82rem;
		color: var(--acc-muted);
		margin-top: 2px;
	}

	.td-chair {
		font-weight: 600;
		color: var(--acc-dark);
		white-space: nowrap;
	}

	.affil-chip {
		display: inline-block;
		background: var(--acc-bg-alt);
		padding: 4px 10px;
		border-radius: 999px;
		font-size: 0.82rem;
		font-weight: 500;
		color: var(--acc-charcoal);
	}

	/* =========================================================
	   SECTION 8: ORGANISING TEAM
	   ========================================================= */
	.team-hierarchy {
		display: flex;
		flex-direction: column;
		gap: 36px;
	}

	.team-group {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 28px 32px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.group-heading {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 20px;
		border-bottom: 1px solid var(--acc-border);
		padding-bottom: 10px;
	}

	.team-cards-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 20px;
	}

	.team-member-card {
		background: var(--acc-bg);
		border-radius: var(--acc-radius-sm);
		padding: 20px;
		border: 1px solid var(--acc-border);
	}

	.member-role-chip {
		display: inline-block;
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--acc-primary-dark);
		margin-bottom: 8px;
	}

	.member-name {
		font-size: 1.1rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 4px;
	}

	.member-org {
		font-size: 0.85rem;
		color: var(--acc-muted);
		font-weight: 500;
	}

	.core-committee-box {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 24px;
	}

	.subgroup-box {
		background: var(--acc-bg);
		border-radius: var(--acc-radius-sm);
		padding: 20px;
		border: 1px solid var(--acc-border);
	}

	.subgroup-title {
		font-size: 0.88rem;
		font-weight: 700;
		color: var(--acc-dark);
		display: block;
		margin-bottom: 14px;
	}

	.members-tag-cloud {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.member-tag {
		background: #ffffff;
		border: 1px solid var(--acc-border);
		padding: 6px 12px;
		border-radius: 999px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--acc-charcoal);
	}

	.announcement-notice-box {
		display: flex;
		align-items: center;
		gap: 14px;
		background: #fffbeb;
		border: 1px solid #fef3c7;
		padding: 16px 20px;
		border-radius: var(--acc-radius-sm);
	}

	.notice-icon {
		width: 22px;
		height: 22px;
		color: var(--acc-primary);
		flex-shrink: 0;
	}

	.announcement-notice-box p {
		margin: 0;
		font-size: 0.92rem;
		color: #92400e;
		font-style: italic;
	}

	/* =========================================================
	   SECTION 9: GUIDELINES
	   ========================================================= */
	.guidelines-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		gap: 24px;
	}

	.guideline-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 28px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.guide-card-header {
		display: flex;
		align-items: center;
		gap: 14px;
		margin-bottom: 18px;
	}

	.guide-icon-wrap {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: var(--acc-primary-light);
		color: var(--acc-primary-dark);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.guide-icon-wrap svg {
		width: 20px;
		height: 20px;
	}

	.guide-card-header h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0;
	}

	.guide-bullets {
		margin: 0;
		padding-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.guide-bullets li {
		font-size: 0.9rem;
		color: var(--acc-muted);
		line-height: 1.55;
	}

	/* =========================================================
	   SECTION 10: IMPORTANT DATES (TIMELINE)
	   ========================================================= */
	.timeline-container {
		max-width: 800px;
		margin: 0 auto;
		position: relative;
	}

	.timeline-item {
		display: flex;
		gap: 24px;
		position: relative;
	}

	.timeline-marker {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 32px;
		flex-shrink: 0;
	}

	.marker-dot {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: #ffffff;
		border: 4px solid var(--acc-primary);
		box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.15);
		z-index: 2;
	}

	.marker-line {
		width: 2px;
		flex: 1;
		background: #e2e8f0;
		margin: 8px 0;
	}

	.timeline-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 20px 24px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		flex: 1;
		margin-bottom: 24px;
		transition: all 0.2s ease;
	}

	.timeline-item:hover .timeline-card {
		transform: translateX(4px);
		border-color: #fed7aa;
	}

	.highlight-item .marker-dot {
		background: var(--acc-primary);
		border-color: #ffffff;
		box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.35);
	}

	.highlight-item .timeline-card {
		border-left: 4px solid var(--acc-primary);
		background: #fffdfa;
	}

	.t-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		margin-bottom: 8px;
	}

	.stage-tag {
		font-weight: 700;
		font-size: 1.05rem;
		color: var(--acc-dark);
	}

	.date-badge-pill {
		background: var(--acc-primary-light);
		color: var(--acc-primary-dark);
		font-weight: 700;
		font-size: 0.85rem;
		padding: 4px 12px;
		border-radius: 999px;
	}

	.stage-desc {
		font-size: 0.92rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.5;
	}

	/* =========================================================
	   SECTION 11 & 12: REGISTRATION & AWARDS
	   ========================================================= */
	.reg-policy-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 36px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
	}

	.fee-includes-box {
		background: var(--acc-bg);
		border: 1px solid var(--acc-border);
		border-radius: var(--acc-radius-sm);
		padding: 20px;
		margin: 24px 0;
	}

	.fee-includes-box h4 {
		font-size: 0.95rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 14px;
	}

	.includes-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 12px;
	}

	.inc-pill {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--acc-charcoal);
	}

	.inc-pill svg {
		width: 16px;
		height: 16px;
		color: #16a34a;
		flex-shrink: 0;
	}

	.policy-notes {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.policy-note-item {
		font-size: 0.9rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.55;
	}

	.awards-cards-column {
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin-top: 24px;
	}

	.award-card {
		display: flex;
		align-items: flex-start;
		gap: 18px;
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 22px 24px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		transition: all 0.2s ease;
	}

	.award-card:hover {
		transform: translateY(-3px);
		box-shadow: var(--acc-shadow-md);
	}

	.award-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.award-icon-box svg {
		width: 26px;
		height: 26px;
	}

	.gold-award .award-icon-box {
		background: #fef3c7;
		color: #d97706;
	}

	.amber-award .award-icon-box {
		background: #ffedd5;
		color: #ea580c;
	}

	.poster-award .award-icon-box {
		background: #e0f2fe;
		color: #0284c7;
	}

	.award-info h3 {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 0 0 6px;
	}

	.award-info p {
		font-size: 0.9rem;
		color: var(--acc-muted);
		margin: 0;
		line-height: 1.55;
	}

	/* =========================================================
	   SECTION 13 & 14: VENUE & CONTACT
	   ========================================================= */
	.venue-card,
	.contact-card {
		background: #ffffff;
		border-radius: var(--acc-radius);
		padding: 36px;
		border: 1px solid var(--acc-border);
		box-shadow: var(--acc-shadow-sm);
		display: flex;
		flex-direction: column;
	}

	.venue-name {
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 1.45rem;
		font-weight: 700;
		color: var(--acc-dark);
		margin: 12px 0 4px;
	}

	.venue-sub {
		font-size: 0.95rem;
		color: var(--acc-muted);
		margin: 0 0 20px;
	}

	.venue-meta-box {
		display: flex;
		flex-direction: column;
		gap: 10px;
		background: var(--acc-bg);
		border-radius: var(--acc-radius-sm);
		padding: 16px;
		margin-bottom: 20px;
		border: 1px solid var(--acc-border);
	}

	.meta-row {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--acc-charcoal);
	}

	.meta-icon {
		width: 18px;
		height: 18px;
		color: var(--acc-primary);
		flex-shrink: 0;
	}

	.venue-description {
		font-size: 0.92rem;
		color: var(--acc-muted);
		line-height: 1.65;
		margin-bottom: 24px;
		flex: 1;
	}

	.contact-lead {
		font-size: 0.95rem;
		color: var(--acc-muted);
		line-height: 1.65;
		margin: 12px 0 24px;
	}

	.contact-highlight-box {
		display: flex;
		align-items: center;
		gap: 20px;
		background: #fffbeb;
		border: 1px solid #fef3c7;
		border-radius: var(--acc-radius-sm);
		padding: 24px;
		margin-bottom: 24px;
	}

	.contact-icon-large {
		width: 52px;
		height: 52px;
		border-radius: 12px;
		background: var(--acc-primary);
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	.contact-icon-large svg {
		width: 26px;
		height: 26px;
	}

	.contact-details {
		display: flex;
		flex-direction: column;
	}

	.sec-label {
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: #92400e;
	}

	.sec-email {
		font-size: 1.3rem;
		font-weight: 700;
		color: var(--acc-dark);
		text-decoration: none;
		margin: 2px 0;
	}

	.sec-email:hover {
		color: var(--acc-primary);
		text-decoration: underline;
	}

	.sec-note {
		font-size: 0.78rem;
		color: #b45309;
	}

	.contact-actions {
		margin-top: auto;
	}

	/* =========================================================
	   RESPONSIVE BREAKPOINTS
	   ========================================================= */
	@media (max-width: 960px) {
		.two-col-grid {
			grid-template-columns: 1fr;
			gap: 28px;
		}

		.core-committee-box {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 768px) {
		.hero-section {
			padding: 50px 0 60px;
		}

		.hero-action-buttons {
			flex-direction: column;
			width: 100%;
		}

		.hero-action-buttons .btn {
			width: 100%;
		}

		.includes-grid {
			grid-template-columns: 1fr;
		}

		.objectives-grid {
			grid-template-columns: 1fr;
		}

		.tracks-grid {
			grid-template-columns: 1fr;
		}

		.chairs-table {
			font-size: 0.85rem;
		}

		.chairs-table th,
		.chairs-table td {
			padding: 12px 14px;
		}

		.info-card,
		.reg-policy-card,
		.venue-card,
		.contact-card,
		.team-group {
			padding: 24px;
		}
	}
</style>
