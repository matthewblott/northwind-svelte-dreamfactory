import { Categories } from '$lib/rest'
import { error } from '@sveltejs/kit'

export const load = async () => {
	const items = await Categories.fetchAll()

	if (items) {
		return items
	}
	throw error(404, 'Not found')
}
