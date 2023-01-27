import { Supplier as data } from '$lib/data/supplier'
import type { Supplier as schema } from '$lib/schema/supplier'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
