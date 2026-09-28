<script>
	import { db } from '$lib/firebase';
	import { collection, query, where, getDocs } from 'firebase/firestore';

	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import bcrypt from 'bcryptjs';

	let uid = '';
	let password = '';
	let loading = false;

	const SESSION_TIME = 60 * 60; // 1 hour

	//  Set Cookie
	function setCookie(name, value, seconds) {
		const d = new Date();

		d.setTime(d.getTime() + seconds * 1000);

		document.cookie =
			`${name}=${encodeURIComponent(value)};` +
			`expires=${d.toUTCString()};` +
			`path=/; SameSite=Lax`;
	}

	//  Get Cookie
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

	//  Delete Cookie
	function deleteCookie(name) {
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}

	//  Auto Login
	onMount(() => {
		const session = getCookie('user');

		if (!session) return;

		try {
			const user = JSON.parse(session);

			//  Expiry Check
			if (Date.now() > user.expiry) {
				deleteCookie('user');
				return;
			}

			redirectUser(user);
		} catch (e) {
			deleteCookie('user');
		}
	});

	//  Redirect
	function redirectUser(user) {
		if (user.role === 'admin') {
			window.location.href = '/samiksha/admin';
		} else {
			window.location.href = '/samiksha/speaker';
		}
	}

	//  Login
	async function login() {
		if (!uid || !password) {
			alert('Enter UID/email and password');
			return;
		}

		try {
			loading = true;

			let user = null;

			const input = uid.trim();

			//  Search by UID
			let q = query(collection(db, 'users'), where('uid', '==', input));

			let snap = await getDocs(q);

			if (!snap.empty) {
				user = snap.docs[0].data();
			} else {
				// 🔍 Search by Email
				q = query(collection(db, 'users'), where('email', '==', input));

				snap = await getDocs(q);

				if (!snap.empty) {
					user = snap.docs[0].data();
				}
			}

			//  User not found
			if (!user) {
				alert('User not found');
				return;
			}

			//  Compare Hashed Password
			const validPassword = await bcrypt.compare(password, user.password);

			if (!validPassword) {
				alert('Incorrect password');
				return;
			}

			//  Never save password in cookie
			delete user.password;

			//  Save Cookie
			setCookie(
				'user',
				JSON.stringify({
					...user,
					expiry: Date.now() + SESSION_TIME * 1000
				}),
				SESSION_TIME
			);

			//  Redirect
			redirectUser(user);
		} catch (err) {
			console.error(err);
			alert('Login failed');
		} finally {
			loading = false;
		}
	}
</script>

<div class="container">
	<div class="login-box">
		<h2>Login</h2>

		<input type="text" placeholder="UID or Email" bind:value={uid} />

		<input
			type="password"
			placeholder="Password"
			bind:value={password}
			on:keydown={(e) => e.key === 'Enter' && login()}
		/>

		<button on:click={login} disabled={loading}>
			{#if loading}
				Logging in...
			{:else}
				Login
			{/if}
		</button>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		background: #f5f5f5;
		padding: 20px;
	}

	.login-box {
		width: 100%;
		max-width: 360px;
		background: white;
		padding: 30px;
		border-radius: 12px;
		box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
	}

	h2 {
		text-align: center;
		margin-bottom: 20px;
	}

	input {
		width: 100%;
		padding: 12px;
		margin: 10px 0;
		border: 1px solid #ddd;
		border-radius: 8px;
		font-size: 15px;
		box-sizing: border-box;
	}

	input:focus {
		outline: none;
		border-color: orange;
	}

	button {
		width: 100%;
		padding: 12px;
		margin-top: 10px;
		border: none;
		border-radius: 8px;
		background: orange;
		color: white;
		font-size: 16px;
		cursor: pointer;
		transition: 0.2s;
	}

	button:hover {
		opacity: 0.9;
	}

	button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
