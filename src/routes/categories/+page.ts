import { Category as data } from '$lib/data/category'
import { error } from '@sveltejs/kit'

export const load = async () => {
	const page = 1

	const items = await data.fetchPaged(page)

	if (items) {
		return items
	}
	throw error(404, 'Not found')
}
