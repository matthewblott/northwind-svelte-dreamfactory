import { Category as data } from '$lib/data/category'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const item = await data.fetchById(parseInt(params.id))

	if (item) {
	  
    item.data.attributes.id = item.data.id

		return item.data.attributes
	}
	throw error(404, 'Not found')
}
