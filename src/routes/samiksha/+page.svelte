<script lang="ts">
	import { goto } from '$app/navigation';

	import { onMount } from 'svelte';

	import { writable } from 'svelte/store';

	/* =========================
     USER STORE
  ========================= */

	export const user = writable(null);

	/* =========================
     GET COOKIE
  ========================= */

	function getCookie(name: string) {
		if (typeof document === 'undefined') return '';

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

	/* =========================
     DELETE COOKIE
  ========================= */

	function deleteCookie(name: string) {
		if (typeof document === 'undefined') return;

		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}

	/* =========================
     CHECK LOGIN
  ========================= */

	onMount(() => {
		try {
			const session = getCookie('user');

			// NO SESSION
			if (!session) {
				user.set(null);

				return;
			}

			const parsed = JSON.parse(session);

			// EXPIRED
			if (parsed.expiry && Date.now() > parsed.expiry) {
				deleteCookie('user');

				user.set(null);

				goto('/samiksha/login');

				return;
			}

			// VALID USER
			user.set(parsed);
		} catch (err) {
			console.error('Session error:', err);

			deleteCookie('user');

			user.set(null);
		}
	});

	/* =========================
     LOGOUT
  ========================= */

	function logout() {
		deleteCookie('user');

		user.set(null);

		goto('/samiksha/login');
	}
</script>

<div class="hero-section">
	<!-- LEFT SIDE IMAGE -->
	<!-- <div
		class="hero-image"
		style="
    display: inline-block;
    text-align: center;
    margin-top: 30px;
"
	>
		<img
			src="/images/brhat-logo.png"
			alt="Logo of BRHAT - Bharatiya Research Hub for Advanced Technologies"
		/>
		<img src="/images/jnu-logo.gif" alt="Logo of JNU - Jawaharlal Nehru University" />
	</div> -->

	<!-- RIGHT SIDE CONTENT -->
	<div class="hero-content" style="margin-top: 30px;">
		<h2>Introducing</h2>

		<p>
			The Samiksha Interdisciplinary Meeting Series is an initiative focused on building
			multidisciplinary research collaborations in Indian Knowledge Systems (IKS) and Heritage
			Science. It brings together scholars, scientists, technologists, artists, and industry experts
			to explore how traditional Bharatiya knowledge can engage with contemporary disciplines and
			real-world challenges through structured collaboration and innovation.
		</p>
	</div>
</div>
<div class="login-banner">
	<div class="login-content">
		<h2>Login to Select Speakers</h2>

		<p>
			Access your account to explore profiles, choose speakers, and participate in the collaborative
			research matchmaking process.
		</p>
	</div>

	<!-- LOGIN / LOGOUT -->

	{#if $user}
		<button class="auth-btn logout-btn" on:click={logout}> Logout </button>
	{:else}
		<a href="/samiksha/login" class="auth-btn login-btn"> Login </a>
	{/if}
</div>
<div class="schedule-section">
	<div class="section-head">
		<h2>Three-Day Schedule</h2>
	</div>

	<div class="schedule-grid">
		<!-- DAY 1 -->
		<div class="schedule-card">
			<div class="day-badge">Day 1</div>

			<h3>Expert Matchmaking & Attractors</h3>

			<p>
				Participants connect through a structured matchmaking process based on shared research
				interests and thematic attractors. The day focuses on networking, idea exchange, and
				identifying interdisciplinary collaborations.
			</p>
		</div>

		<!-- DAY 2 -->
		<div class="schedule-card">
			<div class="day-badge">Day 2</div>

			<h3>Group Nucleation</h3>

			<p>
				Participants form interdisciplinary research clusters and define focused research themes,
				problem statements, and collaborative directions integrating IKS with contemporary
				frameworks.
			</p>
		</div>

		<!-- DAY 3 -->
		<div class="schedule-card">
			<div class="day-badge">Day 3</div>

			<h3>Research Pathway Development</h3>

			<p>
				Groups develop actionable research pathways through proposals, publications, white papers,
				and application- oriented ideas aimed at long-term academic and societal impact.
			</p>
		</div>
	</div>
</div>

<style>
	/* =========================
   HERO SECTION
========================= */

	.hero-section {
		display: grid;

		gap: 50px;
		align-items: center;
		max-width: 1200px;
		margin: 60px auto;
		padding: 20px;
	}

	/* =========================
   IMAGE
========================= */

	.hero-image img {
		width: 50%;
		border-radius: 22px;
		object-fit: cover;
	}

	/* =========================
   CONTENT
========================= */

	.hero-content h2 {
		font-size: 46px;
		font-weight: 700;
		margin-bottom: 20px;
		color: #222;
		line-height: 1.2;
	}

	.hero-content p {
		font-size: 17px;
		line-height: 1.9;
		color: #555;
	}
	/* =========================
   SECTION schedule
========================= */

	.schedule-section {
		position: relative;
		max-width: 100%;
		padding: 80px 40px;
		overflow: hidden;
		background-image: linear-gradient(rgba(0, 0, 0, 0.349), rgba(0, 0, 0, 0.414)),
			url('/images/concepts.png');

		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	/* =========================
   HEADER
========================= */

	.section-head {
		text-align: center;
		margin-bottom: 50px;
	}

	.section-head h2 {
		font-size: 48px;
		font-weight: 800;
		margin-bottom: 16px;
		color: #ffffff;
	}

	.section-head p {
		max-width: 800px;
		margin: auto;
		font-size: 17px;
		line-height: 1.8;
		color: #666;
	}

	/* =========================
   GRID
========================= */

	.schedule-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
	}

	/* =========================
   CARD
========================= */

	.schedule-card {
		position: relative;
		background: white;
		border-radius: 24px;
		padding: 32px;
		overflow: hidden;
		border: 1px solid #eee;
		box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
		transition: 0.3s ease;
	}

	/* HOVER */

	.schedule-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 18px 45px rgba(245, 148, 61, 0.18);
	}

	/* TOP GRADIENT */

	.schedule-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 6px;
		background: linear-gradient(90deg, #f5943d, #ffb366);
	}

	/* =========================
   DAY BADGE
========================= */

	.day-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px 18px;
		border-radius: 999px;
		background: rgba(245, 148, 61, 0.12);
		color: #f5943d;
		font-size: 13px;
		font-weight: 700;
		margin-bottom: 18px;
	}

	/* =========================
   TITLE
========================= */

	.schedule-card h3 {
		font-size: 24px;
		margin-bottom: 16px;
		color: #222;
		line-height: 1.3;
	}

	/* =========================
   TEXT
========================= */

	.schedule-card p {
		font-size: 15px;
		line-height: 1.9;
		color: #666;
	}
	.login-banner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		padding: 28px 100px;
		background: linear-gradient(135deg, #f5943d, #ffb366);
		box-shadow: 0 15px 40px rgba(245, 148, 61, 0.25);
		max-width: 100%;
	}

	/* =========================
   CONTENT
========================= */

	.login-content h2 {
		color: white;
		font-size: 32px;
		margin-bottom: 10px;
		font-weight: 700;
	}

	.login-content p {
		color: rgba(255, 255, 255, 0.92);
		font-size: 15px;
		line-height: 1.7;
		max-width: 700px;
	}

	/* =========================
   BUTTON
========================= */

	.login-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 160px;
		padding: 14px 28px;
		border-radius: 12px;
		background: white;
		color: #f5943d;
		font-size: 16px;
		font-weight: 700;
		text-decoration: none;
		transition: 0.25s ease;
	}

	/* HOVER */

	.login-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
	}

	/* =========================
   MOBILE
========================= */

	@media (max-width: 768px) {
		.hero-section {
			grid-template-columns: 1fr;
			gap: 25px;
			margin: 30px auto;
		}

		.hero-content {
			text-align: center;
		}

		.hero-content h2 {
			font-size: 32px;
		}

		.hero-content p {
			font-size: 15px;
		}
		.login-banner {
			flex-direction: column;

			text-align: center;

			padding: 24px 20px;
		}

		.login-content h2 {
			font-size: 26px;
		}

		.login-btn {
			width: 100%;
		}
	}
	@media (max-width: 992px) {
		.schedule-grid {
			grid-template-columns: 1fr;
		}

		.section-head h2 {
			font-size: 36px;
		}

		.schedule-card {
			padding: 24px;
		}
	}
</style>
