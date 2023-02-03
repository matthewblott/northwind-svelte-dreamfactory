import { Shipper as data } from '$lib/data/shipper'
import type { Shipper as schema } from '$lib/schema/shipper'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(parseInt(params.id))

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
