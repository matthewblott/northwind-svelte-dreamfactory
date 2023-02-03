import { Order as data } from '$lib/data/order'
import type { Order as schema } from '$lib/schema/order'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
