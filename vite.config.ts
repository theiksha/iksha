import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  base: '/', // ✅ Always root for custom domain
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
});
