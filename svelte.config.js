import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.svelte', '.md', '.svx']
		})
	],
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html' // 👈 this is the important line
		}),
		prerender: {
			handleHttpError: 'warn' // optional, skips 404 warnings
		}
	}
};

export default config;
