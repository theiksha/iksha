<script>
	import { logout } from '$lib/utils/auth';
</script>

<div class="layout">
	<aside class="sidebar">
		<h2>IKSHA</h2>

		<a href="/samiksha/admin">Dashboard</a>
		<a href="/samiksha/admin/add">Add Speaker</a>

		<button on:click={logout}>Logout</button>
	</aside>

	<main class="content">
		<slot />
	</main>
</div>

<style>
	.layout {
		display: flex;
	}

	.sidebar {
		width: 220px;
		background: #111;
		color: white;
		height: 100vh;
		padding: 20px;
	}

	.sidebar a,
	.sidebar button {
		display: block;
		margin: 10px 0;
		color: white;
		text-decoration: none;
		border: none;
		background: none;
		cursor: pointer;
	}

	.content {
		flex: 1;
		padding: 30px;
	}
</style>
