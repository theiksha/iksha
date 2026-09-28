<script lang="ts">
	import { mobileBar, toggleMobilebar, mediaClass } from '$lib/utils/globalstores';
	import { page } from '$app/stores';

	import { user } from '$lib/stores/user.js';
	import Menu from '$lib/icons/menu.svelte';
	import Close from '$lib/icons/close.svelte';
	import { onMount } from 'svelte';

	function loadUser() {
		const session = document.cookie.split('; ').find((row) => row.startsWith('user='));

		if (!session) {
			user.set(null);

			return;
		}

		try {
			const parsed = JSON.parse(decodeURIComponent(session.split('=')[1]));

			user.set(parsed);
		} catch (err) {
			console.error(err);

			user.set(null);
		}
	}

	onMount(() => {
		loadUser();

		window.addEventListener('focus', loadUser);

		return () => {
			window.removeEventListener('focus', loadUser);
		};
	});
	function handleClose() {
		if ($mediaClass !== 'wide' && $mobileBar) {
			toggleMobilebar();
		}
	}

	// ✅ Active route
	function isActive(path: string) {
		return $page.url.pathname === path;
	}
</script>

<div class="row ycenter xbetween outer padded">
	<!-- LOGO -->
	<a class="row ycenter logo blanker" href="/">
		<img class="logo" src="/images/iksha.png" alt="iksha logo" />
	</a>

	<div class="row ycenter">
		{#if $mediaClass === 'wide' || $mobileBar}
			<nav class="row ycenter cgap16 mcol mright" on:click={handleClose}>
				<p class="small">
					<a href="/" class:active={isActive('/')}>HOME</a>
				</p>

<<<<<<< Updated upstream
  <div class="row ycenter">
    {#if $mediaClass === 'wide' || $mobileBar}
    <nav class="row ycenter cgap16 mcol mright" on:click={handleClose} on:keydown={handleClose}>
  <p class="small"><a class="blanker" href="/">HOME</a></p>
  <p class="small"><a class="blanker" href="/about">ABOUT</a></p>
  <p class="small"><a class="blanker" href="/diiksha">DIIKSHA</a></p>
  <p class="small"><a class="blanker" href="/opportunities">OPPORTUNITIES</a></p>

  <!-- ===== CONFERENCE Dropdown ===== -->
  <div class="dropdown">
    <p class="small dropdown-title">
      <a class="blanker" href="/conference/">CONFERENCE</a>
    </p>
    <ul class="dropdown-menu">
      <li><a class="blanker" href="/conference/">AAC 2026</a></li>

      <!-- ===== AAC 2025 Nested Dropdown ===== -->
      <li class="dropdown-sub">
  <a class="blanker" href="/conference/aac2025">AAC 2025</a>
  <ul class="dropdown-submenu">
    <li><a class="blanker" href="/conference/aac2025/about.html">About</a></li>
    <li><a class="blanker" href="/conference/aac2025/papersubmission.html">Paper Submission</a></li>
    <li><a class="blanker" href="/conference/aac2025/schedule.html">Schedule</a></li>
    <li><a class="blanker" href="/Documents/AAC_on_IKS_Brochure_2025.pdf">Brochure</a></li>
  </ul>
</li>
    </ul>
  </div>

  <!-- ===== SAṄGAMA Dropdown ===== -->
  <div class="dropdown">
    <p class="small dropdown-title">
      <a class="blanker" href="/sangama/">SAṄGAMA</a>
    </p>
    <ul class="dropdown-menu">
      <li><a class="blanker" href="/sangama/overview">Overview</a></li>
      <li><a class="blanker" href="/Documents/Sangama_2023.pdf">Sangama 2023</a></li>
      <li><a class="blanker" href="/events/iksha-sangama-2024">Sangama 2024</a></li>
    </ul>
  </div>

  <p class="small"><a class="blanker" href="/journal">JOURNAL</a></p>
  <p class="small"><a class="blanker" href="/events">IKS NEWS AND EVENTS</a></p>
  <p class="small"><a class="blanker" href="/contact">CONTACT</a></p>
</nav>

    {/if}
    {#if $mediaClass !== 'wide'}
      <button class="blanker" on:click={toggleMobilebar}>
        {#if $mobileBar}
        <Close/>
        {:else}
        <Menu/>
        {/if}
      </button>
    {/if}
  </div>
=======
				<p class="small">
					<a href="/about" class:active={isActive('/about')}>ABOUT</a>
				</p>
>>>>>>> Stashed changes

				<p class="small">
					<a href="/diiksha" class:active={isActive('/diiksha')}>DIIKSHA</a>
				</p>

				<p class="small">
					<a href="/opportunities" class:active={isActive('/opportunities')}>OPPORTUNITIES</a>
				</p>

				<!-- SAMIKSHA -->

				<div class="dropdown">
					<p class="small">
						<a href="/samiksha" class:active={$page.url.pathname.startsWith('/samiksha')}>
							SAMIKSHA
						</a>
					</p>

					<ul class="dropdown-menu">
						<!-- NOT LOGGED IN -->

						{#if !$user}
							<li>
								<a href="/samiksha/login"> Login </a>
							</li>
						{:else}
							<!-- SPEAKER -->

							<li>
								<a href="/samiksha/speaker"> Speaker Selection </a>
							</li>

							<!-- ADMIN -->

							{#if $user.role === 'admin'}
								<li>
									<a href="/samiksha/admin"> Admin Dashboard </a>
								</li>

								<li>
									<a href="/samiksha/admin/add"> Add Speaker </a>
								</li>
							{/if}

							<!-- LOGOUT -->

							<li>
								<a
									href="#"
									on:click|preventDefault={() => {
										document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
										window.location.href = '/samiksha/login';
									}}
								>
									Logout
								</a>
							</li>
						{/if}
					</ul>
				</div>

				<!-- CONFERENCE -->
				<div class="dropdown">
					<p class="small">
						<a href="/conference/" class:active={$page.url.pathname.startsWith('/conference') || $page.url.pathname.startsWith('/aac2027') || $page.url.pathname.startsWith('/aac2026')}>
							CONFERENCE
						</a>
					</p>

					<ul class="dropdown-menu">
						<li><a href="/aac2027">AAC 2027</a></li>
						<li><a href="/aac2026">AAC 2026</a></li>

						<li class="dropdown-sub">
							<a href="/conference/aac2025">AAC 2025</a>

							<ul class="dropdown-submenu">
								<li><a href="/conference/aac2025/about.html">About</a></li>
								<li><a href="/conference/aac2025/papersubmission.html">Paper Submission</a></li>
								<li><a href="/conference/aac2025/schedule.html">Schedule</a></li>
								<li><a href="/Documents/AAC_on_IKS_Brochure_2025.pdf">Brochure</a></li>
							</ul>
						</li>
					</ul>
				</div>

				<!-- SANGAMA -->
				<div class="dropdown">
					<p class="small">
						<a href="/sangama/" class:active={$page.url.pathname.startsWith('/sangama')}>
							SAṄGAMA
						</a>
					</p>

					<ul class="dropdown-menu">
						<li><a href="/sangama/overview">Overview</a></li>
						<li><a href="/Documents/Sangama_2023.pdf">Sangama 2023</a></li>
						<li><a href="/events/iksha-sangama-2024">Sangama 2024</a></li>
						<li><a href="/sangama/iksha-sangama-2026">Sangama 2026</a></li>
					</ul>
				</div>

				<p class="small">
					<a href="/journal" class:active={isActive('/journal')}>JOURNAL</a>
				</p>

				<p class="small">
					<a href="/events" class:active={isActive('/events')}>IKS NEWS AND EVENTS</a>
				</p>

				<p class="small">
					<a href="/contact" class:active={isActive('/contact')}>CONTACT</a>
				</p>
			</nav>
		{/if}

		<!-- MOBILE BUTTON -->
		{#if $mediaClass !== 'wide'}
			<button class="blanker" on:click={toggleMobilebar}>
				{#if $mobileBar}
					<Close />
				{:else}
					<Menu />
				{/if}
			</button>
		{/if}
	</div>
</div>

<style>
	/* =========================
   LOGO
========================= */

	img.logo {
		height: 32px;
		object-fit: contain;
	}

	.outer {
		height: 100%;
		position: relative;
		z-index: 999;
	}

	/* =========================
   LINKS
========================= */

<<<<<<< Updated upstream

/* === Nested Dropdown Styles === */

.dropdown-menu
  li
    font-size: 15px

    a
      display: block
      padding: 0px 10px
      color: #000
      text-decoration: none
      transition: color 0.3s ease

      &:hover
        color: #f5943d
.dropdown-sub
  position: relative  // Needed to position submenu

  > a::after
    
    font-size: 12px
    color: #000

  &:hover > a::after
    

  &:hover > .dropdown-submenu
    display: block

.dropdown-submenu
  display: none  // Hidden by default
  position: absolute
  top: 0
  left: 100%    // Positions submenu to the right of parent
  background: white
  list-style: none
  margin: 0
  padding: 0
  min-width: 180px
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1)
  z-index: 1000

  li
    a
      display: block
      padding: 0px 10px
      color: #000
      text-decoration: none
</style>
=======
	a {
		text-decoration: none;
		color: #000;
		transition: 0.2s ease;
	}

	a:hover {
		color: #f5943d;
	}

	a.active {
		color: #f5943d;
		font-weight: 600;
		border-bottom: 2px solid #f5943d;
		padding-bottom: 2px;
	}

	/* =========================
   LOGIN / LOGOUT
========================= */

	.logout-btn {
		background: #f5943d;
		color: #fff;
		border: none;
		padding: 8px 14px;
		border-radius: 8px;
		cursor: pointer;
		font-weight: 600;
		transition: 0.2s ease;
	}

	.logout-btn:hover {
		opacity: 0.92;
	}

	.login-link {
		color: #f5943d;
		font-weight: 600;
	}

	/* =========================
   MOBILE NAV
========================= */

	@media screen and (max-width: 1024px) {
		nav {
			position: fixed;
			top: 80px;
			right: 0;
			width: 100%;
			height: calc(100vh - 80px);
			background: #fff;
			z-index: 999;
			flex-direction: column;
			align-items: flex-end;
			padding: 40px 20px;
			gap: 18px;
			overflow-y: auto;
			box-shadow: -10px 0 30px rgba(0, 0, 0, 0.06);
		}

		nav p.small {
			font-size: 22px;
		}
	}

	/* =========================
   DROPDOWN
========================= */

	.dropdown {
		position: relative;
	}

	.dropdown:hover .dropdown-menu {
		display: block;
	}

	/* MAIN DROPDOWN */

	.dropdown-menu {
		display: none;
		position: absolute;
		top: 100%;
		left: 0;
		min-width: 220px;
		background: #fff;
		border-radius: 14px;
		list-style: none;
		padding: 10px 0;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		z-index: 9999;
		overflow: hidden;
	}

	.dropdown-menu li {
		list-style: none;
		padding: 0px 10px;
		font-size: 16px;
	}

	.dropdown-menu li a {
		display: block;
		padding: 12px 18px;
		color: #222;
		text-decoration: none;
		transition: 0.2s ease;
	}

	.dropdown-menu li a:hover {
		background: #f8f8f8;
		color: #f5943d;
	}

	/* =========================
   SUB DROPDOWN
========================= */

	.dropdown-sub {
		position: relative;
	}

	.dropdown-sub:hover .dropdown-submenu {
		display: block;
	}

	.dropdown-submenu {
		display: none;
		position: absolute;
		top: 0;
		left: 100%;
		min-width: 220px;
		background: #fff;
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		z-index: 9999;
	}

	.dropdown-submenu li {
		width: 100%;
	}

	.dropdown-submenu li a {
		display: block;
		padding: 12px 18px;
		color: #222;
		text-decoration: none;
		transition: 0.2s ease;
	}

	.dropdown-submenu li a:hover {
		background: #f8f8f8;
		color: #f5943d;
	}

	/* =========================
   MOBILE DROPDOWN
========================= */

	@media screen and (max-width: 1024px) {
		.dropdown-menu,
		.dropdown-submenu {
			position: relative;

			top: unset;
			left: unset;

			width: 100%;

			min-width: 100%;

			box-shadow: none;

			border-left: 2px solid #f5943d;

			border-radius: 0;

			margin-top: 8px;

			padding-left: 10px;

			display: none;
		}

		.dropdown:hover .dropdown-menu,
		.dropdown-sub:hover .dropdown-submenu {
			display: block;
		}

		.dropdown-submenu {
			margin-left: 14px;
		}
	}
</style>
>>>>>>> Stashed changes
