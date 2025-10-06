import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

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
			fallback: 'index.html'
		}),
		paths: {
			base: '/iksha' // 👈 IMPORTANT for GitHub Pages
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
