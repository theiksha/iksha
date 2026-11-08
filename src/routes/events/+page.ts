import { allEvents } from '$lib/utils/localpulls';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	const events = await allEvents();
	return {
		events
	};
};
