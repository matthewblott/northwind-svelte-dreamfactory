import { Regions } from '$lib/rest'

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	return {
		title: 'Regions',
		item: await Regions.fetchById(parseInt(params.id))
	}
}
