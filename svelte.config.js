import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md', '.svx']
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // ✅ ensures SPA works
			strict: false
		}),
		paths: {
			base: dev ? '' : '/iksha' // ✅ your repo name, no trailing slash
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
