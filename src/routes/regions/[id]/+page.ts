import { Region as data } from '$lib/data/region'
import type { Region as schema } from '$lib/schema/region'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
