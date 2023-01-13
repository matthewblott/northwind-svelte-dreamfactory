import { Shipper as data } from '$lib/data/shipper'
import { error } from '@sveltejs/kit'

export const load = async () => {
	const items = await data.fetchAll()

	if (items) {
		return items
	}
	throw error(404, 'Not found')
}
