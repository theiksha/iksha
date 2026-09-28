<script lang="ts">
</script>

<svelte:head>
	<title>Registration Form - IKSHA Sangama 2026</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
</svelte:head>

<div class="sangama-page registration-page">
	<div class="background-decorations">
		<img src="/images/iksha_sangama_2026_hero.png" alt="" class="bg-decor-top-right" />
		<img src="/images/iksha_sangama_2026_footer_bg.png" alt="" class="bg-decor-bottom-right" />
	</div>

	<div class="registration-container">
		<!-- Header Area -->
		<header class="form-header">
			<h1 class="form-title">Registration Form</h1>
			<p class="form-subtitle">Please complete the form below to apply for IKSHA Sangama 2026.</p>
			<span class="form-highlight-text">Official email address preferred.</span>
		</header>

		<div class="columns-grid">
			<!-- Left Column: Form -->
			<div class="form-column-iframe">
				<iframe
					src="https://docs.google.com/forms/d/e/1FAIpQLSccy7L9IjrnSoZWznErp0rFbbr4dJta8vUzTSsIEYA4a85VaA/viewform?embedded=true"
					width="100%"
					height="1400"
					frameborder="0"
					marginheight="0"
					marginwidth="0"
					title="IKSHA Sangama 2026 Registration Form"
					class="google-form-iframe"
				>
					Loading…
				</iframe>
			</div>

			<!-- Right Column: Sidebar -->
			<div class="sidebar-column">
				<!-- Event Card -->
				<div class="sidebar-card event-details-card">
					<h3 class="side-card-title">IKSHA Sangama 2026</h3>
					
					<div class="side-details-list">
						<div class="side-detail-item">
							<svg class="side-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
								<line x1="16" y1="2" x2="16" y2="6"></line>
								<line x1="8" y1="2" x2="8" y2="6"></line>
								<line x1="3" y1="10" x2="21" y2="10"></line>
							</svg>
							<span class="side-text">25, 26 and 27 December 2026</span>
						</div>

						<div class="side-detail-item">
							<svg class="side-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
							<span class="side-text">Amrita Vishwa Vidyapeetham, Amritapuri Campus, Amritapuri, Kerala 690525</span>
						</div>

						<div class="side-detail-item">
							<svg class="side-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<rect x="2" y="4" width="20" height="16" rx="2"></rect>
								<line x1="12" y1="18" x2="12" y2="6"></line>
								<path d="M12 18h-4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4"></path>
							</svg>
							<div class="side-text-stack">
								<span class="text-label">Registration fee:</span>
								<span class="text-value">₹1,000 per delegate</span>
							</div>
						</div>

						<div class="side-detail-item">
							<svg class="side-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M4 4v7a1.5 1.5 0 001.5 1.5H6V20M5 4v4M7 4v4" />
								<path d="M12 4c-1.5 0-2 2-2 4.5S10.5 13 12 13s2-2 2-4.5S13.5 4 12 4zm0 9v7" />
								<path d="M18 4c-.5 1-1.5 3-1.5 6v3h3V10c0-3-1-5-1.5-6zm0 9v7" />
							</svg>
							<span class="side-text">Includes conference access, accommodation, and meals</span>
						</div>
					</div>

					<div class="lotus-divider">
						<svg class="lotus-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
							<path d="M12 21c-2-3-4-6-4-9 0-3.5 2-6 4-8 2 2 4 4.5 4 8 0 3-2 6-4 9z" />
							<path d="M12 21c-4-2-7-5-7-8 0-2.5 1.5-4.5 3-6.5M12 21c4-2 7-5 7-8 0-2.5-1.5-4.5-3-6.5" />
						</svg>
					</div>
				</div>

				<!-- Process Card -->
				<div class="sidebar-card process-card">
					<h3 class="side-card-title">Application Process</h3>
					<div class="process-content">
						<div class="process-icon-box">
							<svg class="process-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
								<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
								<rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
								<path d="M9 14h6M9 10h6M9 18h4" />
							</svg>
						</div>
						<p class="process-text">Applications are reviewed. Confirmation is sent by invitation email.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* === Page Variables & Fonts === */
	:global(:root) {
		--sangama-gold: #96693c;
		--sangama-gold-hover: #b28251;
		--sangama-gold-light: #fbf8f4;
		--sangama-charcoal: #2c2520;
		--sangama-muted: #60554e;
		--sangama-border: #eae2da;
		--sangama-card-bg: #faf8f5;
	}

	.registration-page {
		font-family: 'Plus Jakarta Sans', sans-serif;
		color: var(--sangama-charcoal);
		background-color: #fdfcfb;
		min-height: 100vh;
		padding-top: 120px;
		padding-bottom: 120px;
		position: relative;
		overflow: hidden;
	}

	.form-title, .side-card-title {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
	}

	/* === Background Artworks === */
	.background-decorations {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.bg-decor-top-right {
		position: absolute;
		top: 40px;
		right: -40px;
		width: 600px;
		height: auto;
		opacity: 0.16;
		mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
		-webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%);
	}

	.bg-decor-bottom-right {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 500px;
		height: auto;
		opacity: 0.16;
	}

	.registration-container {
		position: relative;
		z-index: 2;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 24px;
	}

	/* === Header Area === */
	.form-header {
		margin-bottom: 48px;
		max-width: 700px;
	}

	.form-title {
		font-size: 3rem;
		color: var(--sangama-gold);
		margin-bottom: 8px;
	}

	.form-subtitle {
		font-size: 1.15rem;
		color: var(--sangama-muted);
		margin-bottom: 8px;
	}

	.form-highlight-text {
		font-size: 0.95rem;
		color: #b25828;
		font-weight: 600;
	}

	/* === Grid Columns === */
	.columns-grid {
		display: grid;
		grid-template-columns: 1.65fr 0.95fr;
		gap: 40px;
		align-items: start;
	}

	/* === Form Column Styles === */
	.form-column-iframe {
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		border-radius: 12px;
		padding: 16px;
		box-shadow: 0 8px 32px rgba(44, 37, 32, 0.03);
		overflow: hidden;
	}

	.google-form-iframe {
		width: 100%;
		height: 1400px;
		border: none;
		border-radius: 8px;
		display: block;
	}

	/* === Sidebar Column Styles === */
	.sidebar-card {
		background-color: var(--sangama-card-bg);
		border: 1px solid var(--sangama-border);
		border-radius: 12px;
		padding: 32px;
		box-shadow: 0 4px 16px rgba(44, 37, 32, 0.02);
		margin-bottom: 24px;
	}

	.sidebar-card:last-child {
		margin-bottom: 0;
	}

	.side-card-title {
		font-size: 1.5rem;
		color: var(--sangama-gold);
		margin-bottom: 24px;
		border-bottom: 1.5px solid var(--sangama-border);
		padding-bottom: 12px;
	}

	.side-details-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.side-detail-item {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.side-icon {
		width: 24px;
		height: 24px;
		color: var(--sangama-gold);
		flex-shrink: 0;
		margin-top: 2px;
	}

	.side-text {
		font-size: 0.95rem;
		line-height: 1.5;
	}

	.side-text-stack {
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.text-label {
		font-size: 0.85rem;
		color: var(--sangama-muted);
	}

	.text-value {
		font-size: 1rem;
		font-weight: 600;
	}

	.lotus-divider {
		display: flex;
		justify-content: center;
		margin-top: 32px;
		color: var(--sangama-border);
	}

	.lotus-svg {
		width: 32px;
		height: 32px;
	}

	/* Process Card */
	.process-content {
		display: flex;
		gap: 16px;
		align-items: flex-start;
	}

	.process-icon-box {
		width: 48px;
		height: 48px;
		border-radius: 8px;
		background-color: #ffffff;
		border: 1px solid var(--sangama-border);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--sangama-gold);
		flex-shrink: 0;
	}

	.process-icon {
		width: 24px;
		height: 24px;
	}

	.process-text {
		font-size: 0.9rem;
		color: var(--sangama-muted);
		margin: 0;
		line-height: 1.5;
	}

	/* === Responsive Media Queries === */
	@media screen and (max-width: 1024px) {
		.columns-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		
		.bg-decor-top-right {
			width: 450px;
		}
	}

	@media screen and (max-width: 768px) {
		.registration-page {
			padding-top: 100px;
			padding-bottom: 80px;
		}

		.form-title {
			font-size: 2.25rem;
		}

		.form-column-iframe {
			padding: 8px;
		}
	}

	@media screen and (max-width: 480px) {
		.bg-decor-top-right {
			display: none;
		}
	}
</style>
