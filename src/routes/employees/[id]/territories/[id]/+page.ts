import { Territory as data } from '$lib/data/territory'
import type { Territory as schema } from '$lib/schema/territory'
import { error } from '@sveltejs/kit'

export const load = async ({ params, url }): schema => {
	const paths = url.pathname.split('/').filter((item) => item !== '')
	const employeeId = paths[1]
	const item = await data.fetchById(params.id)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
