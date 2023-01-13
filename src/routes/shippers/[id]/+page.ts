import { Shipper } from '$lib/data/shipper'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	const item = await Shipper.fetchById(parseInt(params.id))

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
