import { Categories } from '$lib/rest'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const item = await Categories.fetchById(parseInt(params.id))

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
