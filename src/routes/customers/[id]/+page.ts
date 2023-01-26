import { Customer as data } from '$lib/data/customer'
import type { Customer as schema } from '$lib/schema/customer'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
