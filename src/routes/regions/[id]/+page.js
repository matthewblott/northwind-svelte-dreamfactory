import { Region } from '$lib/data/region'

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	return {
		title: 'Regions',
		item: await Region.fetchById(parseInt(params.id))
	}
}
