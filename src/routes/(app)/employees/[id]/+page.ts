import { Employee as data } from '$lib/data/employee'
import type { Employee as schema } from '$lib/schema/employee'
import { error } from '@sveltejs/kit'

export const load = async ({ params }): schema => {
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
