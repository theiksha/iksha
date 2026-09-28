<script lang="ts">
	import { onMount } from 'svelte';

	function scrollToSection(id: string) {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<svelte:head>
	<title>IKSHA Sangama 2026</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="sangama-page">
	<!-- Hero Section -->
	<section id="about" class="hero-section">
		<div class="section-container hero-grid">
			<div class="hero-text-col">
				<h1 class="hero-title">IKSHA Sangama 2026</h1>
				<p class="hero-subtitle">Three days of coming together.<br />One shared inheritance.</p>

				<div class="hero-details">
					<div class="detail-item">
						<svg
							class="detail-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
							<line x1="16" y1="2" x2="16" y2="6"></line>
							<line x1="8" y1="2" x2="8" y2="6"></line>
							<line x1="3" y1="10" x2="21" y2="10"></line>
						</svg>
						<span class="detail-text">25, 26 and 27 December 2026</span>
					</div>

					<div class="detail-item">
						<svg
							class="detail-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
						<div class="detail-text-multiline">
							<span class="detail-bold">Amrita Vishwa Vidyapeetham, Amritapuri Campus</span>
							<span class="detail-sub">Amritapuri, Kerala 690525</span>
						</div>
					</div>

					<div class="detail-item">
						<svg
							class="detail-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
							<circle cx="9" cy="7" r="4"></circle>
							<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
							<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
						</svg>
						<span class="detail-text"
							>Delegates may arrive from the evening of 24 December 2026</span
						>
					</div>

					<div class="detail-item">
						<span class="detail-currency">₹</span>
						<div class="detail-text-multiline">
							<span class="detail-bold">₹1,000 per delegate (all inclusive)</span>
							<span class="detail-sub"
								>Conference access, accommodation (twin/triple sharing), and all meals</span
							>
						</div>
					</div>
				</div>

				<a
					href="https://docs.google.com/forms/d/e/1FAIpQLSccy7L9IjrnSoZWznErp0rFbbr4dJta8vUzTSsIEYA4a85VaA/viewform?usp=header"
					class="hero-apply-btn"
					style="text-decoration: none;">Apply for Registration</a
				>
			</div>

			<div class="hero-image-col">
				<img
					src="/images/iksha_sangama_2026_hero.png"
					alt="IKSHA Sangama 2026 illustration"
					class="hero-illustration"
				/>
			</div>
		</div>
	</section>

	<!-- The Sangama Experience -->
	<section id="experience" class="experience-section">
		<div class="section-container">
			<h2 class="section-title">The Sangama Experience</h2>

			<div class="experience-grid">
				<!-- Card 1 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
							/>
						</svg>
					</div>
					<h3 class="exp-card-title">Internalizing Wisdom</h3>
				</div>

				<!-- Card 2 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
							<path d="M8 10h.01M12 10h.01M16 10h.01" />
						</svg>
					</div>
					<h3 class="exp-card-title">Deep Dialogue<br />(Samvada)</h3>
				</div>

				<!-- Card 3 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<circle cx="12" cy="12" r="10" />
							<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
						</svg>
					</div>
					<h3 class="exp-card-title">Tangible Creation</h3>
				</div>

				<!-- Card 4 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<circle cx="12" cy="4" r="1.5" />
							<path d="M12 5.5v7m0 0L8 16m4-3.5l4.5 3m-4.5-5s2.5-1.5 4-3m-4 3c-2.5-1-4-2-5-1" />
							<path d="M7 6c2-1.5 5-1.5 7.5-.5" />
						</svg>
					</div>
					<h3 class="exp-card-title">Authentic Performance</h3>
				</div>

				<!-- Card 5 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>
					</div>
					<h3 class="exp-card-title">Community Growth</h3>
				</div>

				<!-- Card 6 -->
				<div class="experience-card">
					<div class="exp-icon-box">
						<svg
							class="exp-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M12 21c-2-3-4-6-4-9 0-3.5 2-6 4-8 2 2 4 4.5 4 8 0 3-2 6-4 9z" />
							<path
								d="M12 21c-4-2-7-5-7-8 0-2.5 1.5-4.5 3-6.5M12 21c4-2 7-5 7-8 0-2.5-1.5-4.5-3-6.5"
							/>
						</svg>
					</div>
					<h3 class="exp-card-title">Paradigm Shift</h3>
				</div>
			</div>
		</div>
	</section>

	<!-- Registration & Guidelines Section -->
	<section id="registration" class="registration-section">
		<div class="section-container reg-grid">
			<!-- Left Column -->
			<div class="reg-left-col">
				<!-- Covers Card -->
				<div class="details-card">
					<h3 class="card-title">What your registration covers</h3>
					<p class="card-subtitle">
						₹500 per delegate. A single fee for all three days, which includes:
					</p>

					<div class="covers-grid">
						<div class="cover-item">
							<div class="cover-icon-box">
								<svg
									class="cover-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
								>
									<rect x="3" y="4" width="18" height="16" rx="2" />
									<line x1="16" y1="2" x2="16" y2="6" />
									<line x1="8" y1="2" x2="8" y2="6" />
									<circle cx="12" cy="11" r="2.5" />
									<path d="M8 16.5c0-1.5 1.5-2.5 4-2.5s4 1 4 2.5" />
								</svg>
							</div>
							<span class="cover-text">Full conference access across all three days</span>
						</div>

						<div class="cover-item">
							<div class="cover-icon-box">
								<svg
									class="cover-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
								>
									<path d="M3 7v11M21 7v11M3 14h18M6 7h3v5H6zM3 11h18" />
								</svg>
							</div>
							<span class="cover-text">Accommodation on campus (twin or triple sharing)</span>
						</div>

						<div class="cover-item">
							<div class="cover-icon-box">
								<svg
									class="cover-icon"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="1.5"
								>
									<path d="M4 4v7a1.5 1.5 0 001.5 1.5H6V20M5 4v4M7 4v4" />
									<path d="M12 4c-1.5 0-2 2-2 4.5S10.5 13 12 13s2-2 2-4.5S13.5 4 12 4zm0 9v7" />
									<path d="M18 4c-.5 1-1.5 3-1.5 6v3h3V10c0-3-1-5-1.5-6zm0 9v7" />
								</svg>
							</div>
							<span class="cover-text">All meals for the duration of the gathering</span>
						</div>
					</div>

					<p class="covers-note">
						Travel to and from Amritapuri is not included. Delegates make their own arrangements.
					</p>
				</div>

				<!-- Arriving Early Card -->
				<div class="details-card horizontal-card">
					<div class="card-icon-aside">
						<svg
							class="aside-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<circle cx="12" cy="12" r="10" />
							<polyline points="12 6 12 12 16 14" />
						</svg>
					</div>
					<div class="card-content-aside">
						<h4 class="aside-title">Arriving early?</h4>
						<p class="aside-desc">
							Delegates may arrive on the evening of 24 December. Sessions begin on the afternoon of
							25 December. If your journey is long, plan to reach on the 24th and settle in—you will
							be glad of the extra night.
						</p>
					</div>
				</div>

				<!-- Showcase Card -->
				<div class="details-card horizontal-card">
					<div class="card-icon-aside">
						<svg
							class="aside-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path d="M3 9h18M3 9l2-4h14l2 4M3 9v11a2 2 0 002 2h14a2 2 0 002-2V9" />
							<path d="M9 22V12h6v10" />
						</svg>
					</div>
					<div class="card-content-aside">
						<h4 class="aside-title">Showcase your IKS product or service</h4>
						<p class="aside-desc">
							Would you like to display or demonstrate your IKS-based product or service at the
							gathering? Let us know in the registration form. Space is limited and allotted in
							advance. Tell us early.
						</p>
					</div>
				</div>
			</div>

			<!-- Right Column -->
			<div class="reg-right-col">
				<div class="details-card steps-card">
					<h3 class="card-title">How to register</h3>
					<p class="card-subtitle">Registration is by application, in two simple steps.</p>

					<div class="steps-list">
						<div class="step-item">
							<div class="step-number">1</div>
							<div class="step-details">
								<h4 class="step-title">Fill the form</h4>
								<p class="step-desc">
									Set aside 10 minutes. The form asks about your work, your area of engagement with
									IKS, and your travel plans.
								</p>
							</div>
						</div>

						<div class="step-item">
							<div class="step-number">2</div>
							<div class="step-details">
								<h4 class="step-title">Provide two IKSHA references</h4>
								<p class="step-desc">
									Your application must carry the names and contact details of two people associated
									with IKSHA or part of the IKSHA circle who can speak to your interest and
									involvement.
								</p>
							</div>
						</div>
					</div>

					<div class="no-references-box">
						<svg
							class="mail-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							/>
							<polyline points="22,6 12,13 2,6" />
						</svg>
						<p class="no-ref-text">
							<strong>Don't know two people connected to IKSHA?</strong><br />
							Write to us at
							<a href="mailto:info@theiksha.org" class="email-link">info@theiksha.org</a> and tell us
							about your work. We'd love to hear from you.
						</p>
					</div>

					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSccy7L9IjrnSoZWznErp0rFbbr4dJta8vUzTSsIEYA4a85VaA/viewform?usp=header"
						class="start-reg-btn"
						style="text-decoration: none; text-align: center; display: block;"
						>Start Registration Form</a
					>
					<span class="deadline-text">Applications close on 30 November 2026</span>

					<div class="info-alert-box">
						<svg
							class="info-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<circle cx="12" cy="12" r="10" />
							<line x1="12" y1="16" x2="12" y2="12" />
							<line x1="12" y1="8" x2="12.01" y2="8" />
						</svg>
						<div class="info-text">
							<strong>What happens after you apply?</strong>
							<p>
								If accepted, you will receive an invitation email from IKSHA with arrival
								instructions, campus details, and the full programme. Please wait for that
								invitation before booking travel.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Reaching Amritapuri -->
	<section id="travel" class="travel-section">
		<div class="section-container">
			<h2 class="section-title">Reaching Amritapuri</h2>

			<div class="travel-grid">
				<!-- Train -->
				<div class="travel-card">
					<div class="travel-icon-box">
						<svg
							class="travel-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<rect x="4" y="3" width="16" height="15" rx="2" />
							<line x1="4" y1="8" x2="20" y2="8" />
							<line x1="4" y1="13" x2="20" y2="13" />
							<circle cx="8" cy="15.5" r="1" />
							<circle cx="16" cy="15.5" r="1" />
							<path d="M6 18l-2 3M18 18l2 3" />
						</svg>
					</div>
					<h3 class="travel-type">By Train</h3>
					<p class="travel-details">
						Karunagappally (KQP) – 10 km<br />
						Kayamkulam Jn (KYJ) – 12 km
					</p>
					<a href="https://www.irctc.co.in" target="_blank" rel="noreferrer" class="travel-link"
						>View train details &rarr;</a
					>
				</div>

				<!-- Air -->
				<div class="travel-card">
					<div class="travel-icon-box">
						<svg
							class="travel-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<path
								d="M21 16V8a2 2 0 00-2-2h-3L10 2H8v4H5L3 8v2h2l3 3H3v2h5l3 3h2v-4l6-4h2a2 2 0 012 2z"
							/>
						</svg>
					</div>
					<h3 class="travel-type">By Air</h3>
					<p class="travel-details">
						Trivandrum (TRV) – 110 km<br />
						Cochin (COK) – 140 km
					</p>
					<a
						href="https://www.google.com/travel/flights"
						target="_blank"
						rel="noreferrer"
						class="travel-link">View air routes &rarr;</a
					>
				</div>

				<!-- Bus -->
				<div class="travel-card">
					<div class="travel-icon-box">
						<svg
							class="travel-icon"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
						>
							<rect x="4" y="3" width="16" height="16" rx="2" />
							<path d="M4 11h16M8 3v4M16 3v4M6 15h2v2H6zm10 0h2v2h-2z" />
							<path d="M6 19v2M18 19v2" />
						</svg>
					</div>
					<h3 class="travel-type">By Bus</h3>
					<p class="travel-details">Oachira, Kayamkulam or Karunagappally on NH 66</p>
					<a href="https://www.keralartc.com" target="_blank" rel="noreferrer" class="travel-link"
						>View bus details &rarr;</a
					>
				</div>
			</div>

			<div class="travel-action">
				<a
					href="https://amrita.edu/campus/amritapuri/reach-us"
					target="_blank"
					rel="noreferrer"
					class="travel-guide-btn">View Detailed Travel Guide</a
				>
			</div>
		</div>
	</section>
</div>

<style>
	/* === Variables & Fonts === */
	:global(:root) {
		--sangama-gold: #96693c;
		--sangama-gold-hover: #b28251;
		--sangama-gold-light: #fbf8f4;
		--sangama-charcoal: #2c2520;
		--sangama-muted: #60554e;
		--sangama-border: #eae2da;
		--sangama-card-bg: #faf8f5;
	}

	.sangama-page {
		font-family: 'Plus Jakarta Sans', sans-serif;
		color: var(--sangama-charcoal);
		background-color: #fcfbfa;
		line-height: 1.6;
		overflow-x: hidden;
	}

	h1,
	h2,
	h3,
	.logo-text,
	.aside-title {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	/* === Custom Header === */
	.custom-header {
		background-color: #ffffff;
		border-bottom: 1px solid var(--sangama-border);
		position: sticky;
		top: 0;
		z-index: 1000;
		height: 80px;
		display: flex;
		align-items: center;
		box-shadow: 0 2px 10px rgba(44, 37, 32, 0.04);
	}

	.header-container {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo-area {
		display: flex;
		align-items: center;
		text-decoration: none;
		gap: 12px;
	}

	.iksha-logo {
		height: 40px;
		width: auto;
		object-fit: contain;
	}

	.logo-text {
		font-size: 1.25rem;
		color: var(--sangama-gold);
		letter-spacing: 0.5px;
	}

	.nav-links {
		display: flex;
		gap: 24px;
	}

	.nav-btn {
		background: none;
		border: none;
		color: var(--sangama-charcoal);
		font-weight: 500;
		font-size: 0.95rem;
		cursor: pointer;
		padding: 8px 4px;
		transition: color 0.2s ease;
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	.nav-btn:hover {
		color: var(--sangama-gold);
	}

	.register-top-btn {
		background-color: var(--sangama-gold);
		color: #ffffff;
		border: none;
		padding: 10px 24px;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition:
			background-color 0.2s ease,
			transform 0.1s ease;
	}

	.register-top-btn:hover {
		background-color: var(--sangama-gold-hover);
		transform: translateY(-1px);
	}

	/* === Hero Section === */
	.hero-section {
		background-color: var(--sangama-gold-light);
		padding: 120px 0 64px 0;
		border-bottom: 1px solid var(--sangama-border);
	}

	.section-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
	}

	.hero-grid {
		display: grid;
		grid-template-columns: 1.1fr 0.9fr;
		gap: 48px;
		align-items: center;
	}

	.hero-text-col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.hero-title {
		font-size: 3.5rem;
		color: var(--sangama-gold);
		margin-bottom: 8px;
		line-height: 1.15;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		color: var(--sangama-muted);
		margin-bottom: 32px;
		font-weight: 400;
		line-height: 1.4;
	}

	.hero-details {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: 36px;
		width: 100%;
	}

	.detail-item {
		display: flex;
		align-items: flex-start;
		gap: 16px;
	}

	.detail-icon {
		width: 24px;
		height: 24px;
		color: var(--sangama-gold);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.detail-currency {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--sangama-gold);
		width: 24px;
		text-align: center;
		line-height: 1;
		flex-shrink: 0;
	}

	.detail-text {
		font-size: 1.05rem;
		font-weight: 500;
	}

	.detail-text-multiline {
		display: flex;
		flex-direction: column;
	}

	.detail-bold {
		font-size: 1.05rem;
		font-weight: 600;
	}

	.detail-sub {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		margin-top: 4px;
	}

	.hero-apply-btn {
		background: none;
		border: 2px solid var(--sangama-gold);
		color: var(--sangama-gold);
		padding: 12px 32px;
		border-radius: 6px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.hero-apply-btn:hover {
		background-color: var(--sangama-gold);
		color: #ffffff;
	}

	.hero-image-col {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero-illustration {
		max-width: 100%;
		height: auto;
		border-radius: 12px;
		border: 1px solid var(--sangama-border);
		box-shadow: 0 12px 32px rgba(44, 37, 32, 0.06);
	}

	/* === Experience Section === */
	.experience-section {
		padding: 80px 0;
		background-color: #ffffff;
		border-bottom: 1px solid var(--sangama-border);
	}

	.section-title {
		font-size: 2.25rem;
		text-align: center;
		color: var(--sangama-charcoal);
		margin-bottom: 48px;
		position: relative;
	}

	.section-title::after {
		content: '';
		display: block;
		width: 60px;
		height: 3px;
		background-color: var(--sangama-gold);
		margin: 12px auto 0;
		border-radius: 2px;
	}

	.experience-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 20px;
	}

	.experience-card {
		background-color: var(--sangama-gold-light);
		border: 1px solid var(--sangama-border);
		border-radius: 8px;
		padding: 24px 16px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		transition: all 0.2s ease;
	}

	.experience-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(150, 105, 60, 0.08);
		border-color: var(--sangama-gold);
	}

	.exp-icon-box {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sangama-gold);
	}

	.exp-icon {
		width: 28px;
		height: 28px;
	}

	.exp-card-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--sangama-charcoal);
		line-height: 1.35;
		margin: 0;
		font-family: 'Plus Jakarta Sans', sans-serif;
	}

	/* === Registration Columns === */
	.registration-section {
		padding: 80px 0;
		background-color: #fcfbfa;
		border-bottom: 1px solid var(--sangama-border);
	}

	.reg-grid {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: 32px;
		align-items: start;
	}

	.details-card {
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		border-radius: 12px;
		padding: 32px;
		box-shadow: 0 4px 16px rgba(44, 37, 32, 0.02);
		margin-bottom: 24px;
	}

	.details-card:last-child {
		margin-bottom: 0;
	}

	.card-title {
		font-size: 1.5rem;
		color: var(--sangama-charcoal);
		margin-bottom: 8px;
	}

	.card-subtitle {
		font-size: 0.95rem;
		color: var(--sangama-muted);
		margin-bottom: 24px;
	}

	.covers-grid {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-bottom: 24px;
	}

	.cover-item {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.cover-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		background-color: var(--sangama-gold-light);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sangama-gold);
		flex-shrink: 0;
	}

	.cover-icon {
		width: 24px;
		height: 24px;
	}

	.cover-text {
		font-size: 0.95rem;
		font-weight: 500;
	}

	.covers-note {
		font-size: 0.85rem;
		color: var(--sangama-muted);
		border-top: 1px solid var(--sangama-border);
		padding-top: 16px;
		margin-top: 8px;
	}

	.horizontal-card {
		display: flex;
		gap: 20px;
		align-items: flex-start;
		padding: 24px 32px;
	}

	.card-icon-aside {
		color: var(--sangama-gold);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.aside-icon {
		width: 32px;
		height: 32px;
	}

	.card-content-aside {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.aside-title {
		font-size: 1.15rem;
		color: var(--sangama-charcoal);
		margin: 0;
	}

	.aside-desc {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		margin: 0;
	}

	/* Steps Card */
	.steps-card {
		border-color: var(--sangama-gold);
		background-color: var(--sangama-gold-light);
	}

	.steps-list {
		display: flex;
		flex-direction: column;
		gap: 24px;
		margin-bottom: 24px;
	}

	.step-item {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.step-number {
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: var(--sangama-gold);
		color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.95rem;
		flex-shrink: 0;
	}

	.step-details {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.step-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--sangama-charcoal);
		margin: 0;
	}

	.step-desc {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		margin: 0;
	}

	.no-references-box {
		display: flex;
		gap: 16px;
		align-items: flex-start;
		border-top: 1px dashed var(--sangama-border);
		padding-top: 20px;
		margin-bottom: 28px;
	}

	.mail-icon {
		width: 24px;
		height: 24px;
		color: var(--sangama-gold);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.no-ref-text {
		font-size: 0.85rem;
		color: var(--sangama-muted);
		margin: 0;
	}

	.email-link {
		color: var(--sangama-gold);
		text-decoration: underline;
		font-weight: 600;
	}

	.start-reg-btn {
		width: 100%;
		background-color: var(--sangama-gold);
		color: #ffffff;
		border: none;
		padding: 14px;
		border-radius: 6px;
		font-weight: 700;
		font-size: 1rem;
		cursor: pointer;
		transition: background-color 0.2s ease;
		margin-bottom: 12px;
	}

	.start-reg-btn:hover {
		background-color: var(--sangama-gold-hover);
	}

	.deadline-text {
		display: block;
		text-align: center;
		font-size: 0.8rem;
		color: var(--sangama-muted);
		margin-bottom: 24px;
	}

	.info-alert-box {
		display: flex;
		gap: 12px;
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		border-radius: 8px;
		padding: 16px;
	}

	.info-icon {
		width: 20px;
		height: 20px;
		color: var(--sangama-gold);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.info-text {
		font-size: 0.85rem;
		color: var(--sangama-muted);
	}

	.info-text strong {
		color: var(--sangama-charcoal);
		display: block;
		margin-bottom: 4px;
	}

	.info-text p {
		margin: 0;
	}

	/* === Travel Section === */
	.travel-section {
		padding: 80px 0;
		background-color: #ffffff;
		border-bottom: 1px solid var(--sangama-border);
	}

	.travel-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-bottom: 40px;
	}

	.travel-card {
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		border-radius: 12px;
		padding: 32px 24px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		transition: all 0.2s ease;
	}

	.travel-card:hover {
		box-shadow: 0 8px 24px rgba(44, 37, 32, 0.05);
		border-color: var(--sangama-gold);
	}

	.travel-icon-box {
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background-color: var(--sangama-gold-light);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sangama-gold);
	}

	.travel-icon {
		width: 28px;
		height: 28px;
	}

	.travel-type {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--sangama-charcoal);
		margin: 0;
	}

	.travel-details {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		line-height: 1.5;
		margin: 0;
	}

	.travel-link {
		font-size: 0.9rem;
		color: var(--sangama-gold);
		text-decoration: none;
		font-weight: 600;
		margin-top: auto;
		transition: color 0.2s ease;
	}

	.travel-link:hover {
		color: var(--sangama-gold-hover);
		text-decoration: underline;
	}

	.travel-action {
		display: flex;
		justify-content: center;
	}

	.travel-guide-btn {
		display: inline-block;
		border: 1px solid var(--sangama-gold);
		color: var(--sangama-gold);
		text-decoration: none;
		padding: 12px 32px;
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.95rem;
		transition: all 0.2s ease;
	}

	.travel-guide-btn:hover {
		background-color: var(--sangama-gold);
		color: #ffffff;
	}

	/* === Footer === */
	.custom-footer {
		background-color: #ffffff;
		border-top: 1px solid var(--sangama-border);
		padding: 40px 0;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
	}

	.footer-logo {
		height: 48px;
		width: auto;
		object-fit: contain;
	}

	.footer-details {
		text-align: center;
	}

	.footer-text {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		margin: 0;
	}

	.footer-contact {
		font-size: 0.85rem;
		color: var(--sangama-muted);
		margin: 6px 0 0;
	}

	.footer-contact a {
		color: var(--sangama-gold);
		text-decoration: underline;
	}

	/* === Responsive Styles === */
	@media screen and (max-width: 1024px) {
		.hero-grid {
			grid-template-columns: 1fr;
			gap: 40px;
			text-align: center;
		}

		.hero-text-col {
			align-items: center;
		}

		.hero-title {
			font-size: 3rem;
		}

		.hero-illustration {
			max-width: 80%;
		}

		.experience-grid {
			grid-template-columns: repeat(3, 1fr);
		}

		.reg-grid {
			grid-template-columns: 1fr;
			gap: 40px;
		}

		.travel-grid {
			grid-template-columns: 1fr;
			gap: 20px;
		}
	}

	@media screen and (max-width: 768px) {
		.custom-header {
			height: 72px;
		}

		.logo-text {
			font-size: 1.1rem;
		}

		.nav-links {
			display: none; /* simple hidden layout for mobile nav in custom header */
		}

		.hero-title {
			font-size: 2.5rem;
		}

		.hero-subtitle {
			font-size: 1.25rem;
		}

		.experience-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.form-row {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.modal-card {
			padding: 24px;
		}
	}

	@media screen and (max-width: 480px) {
		.experience-grid {
			grid-template-columns: 1fr;
		}

		.hero-illustration {
			max-width: 100%;
		}

		.details-card {
			padding: 20px;
		}

		.horizontal-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
		}
	}
</style>
