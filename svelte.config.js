import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex({ extensions: ['.svelte', '.md', '.svx'] })],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			strict: false
		}),
		paths: {
			base: '', // ✅ empty for theiksha.org
			assets: ''
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
