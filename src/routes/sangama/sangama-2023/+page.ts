import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/Documents/Sangama_2023.pdf');
}