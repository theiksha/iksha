<script lang="ts">
	let showPopup = true;

	function closePopup() {
		showPopup = false;
	}
</script>

<svelte:head>
	<title>AAC 2026 | Second Annual Academic Conference on Indian Knowledge Systems</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta
		name="description"
		content="Second Annual Academic Conference on Indian Knowledge Systems (AAC 2026). 24–26 July, 2026 at Gautam Buddha University, Greater Noida, Uttar Pradesh."
	/>
	<link rel="icon" type="image/png" href="/aac2026/conferenceimages/favicon.png" />
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
</svelte:head>

<div class="aac2026-page">
	<!-- Hero Section -->
	<header class="aac2026-hero" id="home">
		<div class="hero-overlay">
			<h3 class="hero-tag">-- Call for Papers --</h3>
			<h1 class="hero-title">Second Annual Academic Conference</h1>
			<h3 class="hero-sub">on Indian Knowledge Systems</h3>
			<div class="hero-divider-wrap">
				<h3 class="hero-theme">IKS: Re-Weaving the Threads of Knowledge</h3>
			</div>

			<a
				href="/Documents/AAC-on-IKS-Brochure-2026.pdf"
				class="hero-btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				Download Brochure
			</a>
		</div>
	</header>

	<!-- Date Bar -->
	<div class="date-bar">
		<p>24–26 July, 2026 | Gautam Buddha University, Greater Noida, Uttar Pradesh</p>
	</div>

	<!-- Intro Section -->
	<section id="about" class="section-block">
		<div class="about-container">
			<div class="column">
				<h2 class="section-heading">Introduction</h2>
				<p class="section-text">
					Indian Knowledge Systems (IKS) encompass a vast knowledge inventory of intellectual traditions of and from India. In short, it stands for the knowledge nuggets developed and pursued in India. These traditions encompass diverse fields ranging from epistemic inquiries to engineering sciences. These knowledge frameworks, tools and systems, evolved and developed over several millennia, offer unique insights into the human condition, the natural world, and the pursuit of knowledge itself.<br /><br />
					Recently, studies in IKS have seen an emergence. The First Annual Academic Conference on Indian Knowledge Systems held in July 2025 at New Delhi saw an enthusiastic participation of almost 450 scholars who presented their work and discussed various aspects of IKS.
				</p>
				<div class="btn-row">
					<a href="#theme" class="action-btn">Themes</a>
					<a href="#submission" class="action-btn">Submissions</a>
				</div>
			</div>
			<div class="column image-col">
				<img src="/aac2026/conferenceimages/intro-image.jpg" alt="About Conference" class="responsive-img" />
			</div>
		</div>
	</section>

	<div class="divider-line"></div>

	<!-- Venue Section -->
	<section id="venue" class="section-block">
		<div class="about-container">
			<div class="column image-col">
				<img src="/aac2026/conferenceimages/venue-image.jpg" alt="Conference Venue" class="responsive-img venue-img" />
			</div>
			<div class="column">
				<h2 class="section-heading">About Venue</h2>
				<p class="section-text">
					Gautam Buddha University (NAAC B+ Accredited) was established in 2002 (Uttar Pradesh Act). It is located on a 511-acre eco-friendly residential campus in Greater Noida. The University offers professional programmes in various fields such as Law, Management etc. and maintains high academic and quality standards, further affirmed by its ISO 9001:2008 certification.<br /><br />
					Inspired by India’s rich civilizational legacy and the inclusive vision of Gautam Buddha, the University integrates human values, ethical understanding, and holistic development into its academic mission. Dedicated centres such as the School of Buddhist Studies &amp; Civilization and the Center of Linguistics and Culture Studies actively promote research in classical Indian thought, culture, languages, and knowledge traditions.<br /><br />
					With an emphasis on interdisciplinary learning and a commitment to nurturing intellectually engaged and socially responsible individuals, GBU fosters an academic climate where ancient Indian insights can dialogue with contemporary scholarship.
				</p>
				<div class="btn-row">
					<a href="https://www.gbu.ac.in/" target="_blank" rel="noopener noreferrer" class="action-btn">Visit Website</a>
					<a href="#dates" class="action-btn">Important Dates</a>
				</div>
			</div>
		</div>
	</section>

	<div class="divider-line"></div>

	<!-- Aim & Objectives Section -->
	<section id="aims" class="section-block">
		<div class="about-container">
			<div class="column">
				<h2 class="section-heading">Aims</h2>
				<p class="section-text">
					The aim of this Second Annual Conference on Indian Knowledge Systems is to promote worthy research scholarship in IKS and cultivate the next generation of scholars in this domain.<br /><br />
					IKS scholars are invited to submit their work. After acceptance from an established team of reviewers, the scholars will be given a chance to present their work orally or through posters at the conference. In addition, the conference will host invited plenary talks and panel discussions. In sum, the conference will provide a fertile space for meaningful discourses in IKS among academicians, senior scholars, young career academics, journal editors and reviewers, to flourish.<br /><br />
					The stakeholders from industry, government and civil society organizations will also be presenting their works to foster greater collaborations and offer ideas for potential joint projects that may have direct relevance.
				</p>
			</div>
			<div class="column">
				<h2 class="section-heading">Objectives</h2>
				<ul class="objectives-list">
					<li>Recognize rich and rigorous scholarship in IKS domain</li>
					<li>Provide a forum for academicians, researchers, scholars and practitioners to present their scholarship and engage in intellectual dialogue surrounding IKS</li>
					<li>Encourage academic research and publication in the field of IKS</li>
					<li>Help develop new frameworks, theories and creative applications in IKS domain to address contemporary challenges</li>
					<li>Encourage cross-disciplinary collaboration and joint research projects in IKS as well as with other fields</li>
					<li>Cultivate a new generation of scholars in IKS and develop their networks with senior mentors</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Themes Section -->
	<section id="theme" class="theme-block">
		<div class="theme-inner">
			<h2 class="theme-title">Themes</h2>
			<ol class="theme-list">
				<li>Darśana</li>
				<li>Nītiśāstra, Arthaśāstra, Dharmaśāstra, etc.</li>
				<li>Itihāsa and Purāṇa</li>
				<li>Jyotiṣa (mathematics)</li>
				<li>Science and Engineering</li>
				<li>Society and culture</li>
				<li>Linguistics, Vyākaraṇa, etc.</li>
				<li>Āyurveda (medical sciences)</li>
				<li>Arts</li>
				<li>Architecture</li>
				<li>Any other related areas of discipline</li>
			</ol>
			<p class="theme-footer-note">We encourage papers in other related areas of discipline as well.</p>
		</div>
	</section>

	<!-- Submission Section -->
	<section id="submission" class="section-block">
		<div class="about-container">
			<div class="column">
				<h2 class="section-heading">Submission of Papers</h2>
				<p class="section-text">
					Papers will be selected through a rigorous peer-review process. Scholars are requested to submit full-length papers through an online portal in the prescribed format (double blind format).<br /><br />
					The language of submission is English. Only accepted papers will be presented in the conference through either oral mode or as posters.<br /><br />
					The decision of the review committee will be final.<br /><br />
					For any clarification, please write to us at <a href="mailto:conference@theiksha.org" class="email-link">conference@theiksha.org</a><br /><br />
					<strong>Selected candidates will be considered for travel reimbursement and accommodation upon availability of funds.&nbsp;There will be a nominal conference fee for scholars who are not students and are employed in regular jobs.</strong>
				</p>
			</div>
			<div class="column" id="dates">
				<h2 class="section-heading">Important Dates</h2>
				<div class="dates-list">
					<p><strong>01 November 2025:</strong> Announcement of the Call for Papers</p>
					<p>
						<strong>10 January 2026:</strong> Submission of extended abstract (1000 words).
						<a href="/aac2026/conferenceimages/Paper-Submission-Guidelines.doc" target="_blank" class="download-link">Download Abstract Format</a>
					</p>
					<p><strong>31 January to 10 February 2026:</strong> Communication of acceptance of abstract for full papers</p>
					<p>
						<strong>15 May 2026:</strong> Submission of Full Papers in IKSHA Journal format.
						<a href="https://brill.com/view/journals/jiks/jiks-overview.xml" target="_blank" rel="noopener noreferrer" class="download-link">Check Details</a>
					</p>
					<p><strong>15 June 2026:</strong> Acceptance Announcement</p>
					<p><strong>24–26 July 2026:</strong> Conference Dates</p>
				</div>
			</div>
		</div>

		<div class="poster-wrap">
			<img src="/aac2026/conferenceimages/event-poster.jpg" alt="AAC 2026 Event Poster" class="poster-img" />
		</div>
	</section>

	<!-- Registration Notice Section -->
	<section class="notice-section">
		<h2>Registration Closed</h2>
		<p class="notice-sub">
			Last Date for Registration: <strong>17 July 2026</strong><br />
			The registration fee is non-refundable under any circumstances.
		</p>
	</section>

	<!-- Register Banner -->
	<section id="Register" class="register-banner">
		<div class="register-inner">
			<h3>2nd Annual Academic Conference on Indian Knowledge Systems (AAC 2026)</h3>
		</div>
	</section>

	<!-- Page Bottom Branding -->
	<div class="page-footer-logo">
		<img src="/aac2026/conferenceimages/logo-left.png" alt="IKSHA Logo" />
	</div>
</div>

<!-- Registration Popup -->
{#if showPopup}
	<div id="registrationPopup" class="popup-overlay">
		<div class="popup-box">
			<button class="popup-close" on:click={closePopup} aria-label="Close popup">&times;</button>
			<h2>Registration Closed</h2>
			<div class="popup-date">
				<strong>Last Date for Registration</strong>
				<span class="date-highlight">17 July 2026</span>
				<p class="refund-note">The registration fee is non-refundable under any circumstances.</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Montserrat:ital,wght@0,400;0,500;0,600;1,400&display=swap');

	.aac2026-page {
		font-family: 'Poppins', sans-serif;
		color: #222222;
		background-color: #ffffff;
		line-height: 1.6;
		box-sizing: border-box;
	}

	.aac2026-page *,
	.aac2026-page *::before,
	.aac2026-page *::after {
		box-sizing: border-box;
	}

	/* Hero Section */
	.aac2026-hero {
		background: url('/aac2026/conferenceimages/top-bg.jpg') no-repeat center center;
		background-size: cover;
		min-height: 520px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		position: relative;
		text-align: center;
		padding: 40px 20px;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: rgba(12, 17, 43, 0.65);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 40px 20px;
	}

	.hero-tag {
		font-family: 'Montserrat', sans-serif;
		font-style: italic;
		font-size: 1.3rem;
		margin-bottom: 8px;
		color: #ffffff;
	}

	.hero-title {
		font-family: 'Poppins', sans-serif;
		font-size: 2.4rem;
		font-weight: 700;
		color: #f5943a;
		margin: 8px 0;
		text-transform: uppercase;
		line-height: 1.25;
	}

	.hero-sub {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.4rem;
		font-weight: 500;
		color: #ffffff;
		margin: 6px 0;
	}

	.hero-divider-wrap {
		border-top: 1px solid #f5943a;
		border-bottom: 1px solid #f5943a;
		padding: 16px 24px;
		margin: 16px 0 24px;
	}

	.hero-theme {
		font-family: 'Montserrat', sans-serif;
		font-size: 1.3rem;
		font-weight: 600;
		color: #ffffff;
		margin: 0;
	}

	.hero-btn {
		display: inline-block;
		background-color: #f5943a;
		color: #ffffff;
		padding: 16px 54px;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 700;
		font-size: 1rem;
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.hero-btn:hover {
		background-color: #e07d24;
		transform: translateY(-2px);
	}

	/* Date Bar */
	.date-bar {
		background-color: #f5943a;
		color: #ffffff;
		text-align: center;
		padding: 16px 20px;
	}

	.date-bar p {
		margin: 0;
		font-size: 1.15rem;
		font-weight: 600;
	}

	/* Sections */
	.section-block {
		padding: 60px 8%;
		background-color: #ffffff;
	}

	.about-container {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		gap: 40px;
		max-width: 1200px;
		margin: 0 auto;
	}

	.column {
		flex: 1;
		background: #ffffff;
	}

	.section-heading {
		font-family: 'Poppins', sans-serif;
		font-size: 1.9rem;
		font-weight: 700;
		color: #111111;
		margin-bottom: 16px;
	}

	.section-text {
		font-size: 1rem;
		line-height: 1.7;
		color: #333333;
		text-align: justify;
		margin-bottom: 24px;
	}

	.btn-row {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		margin-top: 16px;
	}

	.action-btn {
		display: inline-block;
		background-color: #f5943a;
		color: #ffffff;
		padding: 14px 36px;
		border-radius: 6px;
		text-decoration: none;
		font-weight: 600;
		font-size: 0.95rem;
		transition: transform 0.2s ease, background-color 0.2s ease;
	}

	.action-btn:hover {
		background-color: #e07d24;
		transform: translateY(-2px);
	}

	.image-col {
		display: flex;
		justify-content: center;
	}

	.responsive-img {
		width: 100%;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	}

	.venue-img {
		margin-top: 8px;
	}

	.divider-line {
		width: 80%;
		max-width: 1200px;
		margin: 0 auto;
		border-top: 1px solid #e0e0e0;
	}

	/* Objectives List */
	.objectives-list {
		list-style: disc;
		padding-left: 20px;
		margin: 0;
	}

	.objectives-list li {
		font-size: 1rem;
		line-height: 1.7;
		color: #333333;
		margin-bottom: 14px;
	}

	/* Theme Block */
	.theme-block {
		background: url('/aac2026/conferenceimages/theme-bg.jpg') no-repeat center center;
		background-size: cover;
		padding: 70px 8%;
		color: #ffffff;
	}

	.theme-inner {
		max-width: 1000px;
		margin: 0 auto;
	}

	.theme-title {
		font-family: 'Poppins', sans-serif;
		font-size: 2.2rem;
		font-weight: 700;
		color: #ffffff;
		margin-bottom: 24px;
	}

	.theme-list {
		color: #ffffff;
		padding-left: 24px;
		font-size: 1.05rem;
		line-height: 2;
	}

	.theme-list li {
		margin-bottom: 6px;
	}

	.theme-footer-note {
		margin-top: 20px;
		font-size: 1.05rem;
		font-style: italic;
		color: #ffd8a8;
	}

	/* Submission Section */
	.email-link {
		color: #f5943a;
		font-weight: 600;
		text-decoration: underline;
	}

	.dates-list p {
		margin-bottom: 18px;
		line-height: 1.6;
		font-size: 1rem;
	}

	.download-link {
		color: #f5943a;
		font-weight: 600;
		text-decoration: underline;
		margin-left: 6px;
	}

	.poster-wrap {
		display: flex;
		justify-content: center;
		margin-top: 40px;
	}

	.poster-img {
		width: 100%;
		max-width: 600px;
		height: auto;
		border-radius: 8px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
	}

	/* Notice Section */
	.notice-section {
		text-align: center;
		padding: 40px 20px;
		background: #faf8f5;
		border-top: 1px solid #eee;
	}

	.notice-section h2 {
		color: #d32f2f;
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 10px;
	}

	.notice-sub {
		font-size: 1.1rem;
		color: #555555;
		line-height: 1.6;
	}

	/* Register Banner */
	.register-banner {
		background-color: #f5943a;
		padding: 40px 20px;
		text-align: center;
	}

	.register-inner h3 {
		color: #ffffff;
		font-size: 1.3rem;
		font-weight: 600;
		margin: 0;
	}

	/* Bottom Logo */
	.page-footer-logo {
		background: #ffffff;
		padding: 30px 20px;
		display: flex;
		justify-content: center;
	}

	.page-footer-logo img {
		width: 100%;
		max-width: 240px;
		height: auto;
	}

	/* Registration Popup */
	.popup-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.65);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 99999;
		animation: fadeIn 0.3s ease;
	}

	.popup-box {
		width: 90%;
		max-width: 450px;
		background: #ffffff;
		border-radius: 16px;
		text-align: center;
		padding: 35px 25px;
		position: relative;
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
	}

	.popup-box h2 {
		color: #f5943a;
		font-size: 1.6rem;
		margin-bottom: 20px;
	}

	.popup-date {
		font-size: 1.1rem;
		color: #333333;
	}

	.date-highlight {
		display: block;
		font-size: 1.8rem;
		font-weight: 700;
		color: #d32f2f;
		margin: 12px 0;
	}

	.refund-note {
		font-size: 0.95rem;
		color: #666666;
		margin-top: 10px;
	}

	.popup-close {
		position: absolute;
		right: 14px;
		top: 10px;
		background: none;
		border: none;
		font-size: 32px;
		line-height: 1;
		cursor: pointer;
		color: #666666;
		padding: 4px 8px;
		transition: color 0.2s ease;
	}

	.popup-close:hover {
		color: #000000;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	/* Mobile Responsiveness */
	@media (max-width: 768px) {
		.aac2026-hero {
			min-height: 440px;
			padding: 30px 16px;
		}

		.hero-title {
			font-size: 1.8rem;
		}

		.hero-sub {
			font-size: 1.15rem;
		}

		.hero-theme {
			font-size: 1.05rem;
		}

		.hero-btn {
			padding: 12px 36px;
		}

		.section-block {
			padding: 40px 5%;
		}

		.about-container {
			flex-direction: column;
			gap: 28px;
		}

		.btn-row {
			flex-direction: column;
		}

		.action-btn {
			text-align: center;
		}

		.theme-block {
			padding: 40px 5%;
		}
	}
</style>
