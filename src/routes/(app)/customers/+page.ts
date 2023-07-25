import { navigating } from '$app/stores'
import { Customer as data } from '$lib/data/customer'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load: PageLoad = (async ({ params }) => {
	const limit = 1
	const offset = 1
	const items = await data.fetchPaged(limit, offset)

	if (items) {
		return items
	}
	throw error(404, 'Not found')
}) satisfies PageLoad
