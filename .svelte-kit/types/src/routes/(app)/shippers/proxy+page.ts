// @ts-nocheck
import { navigating } from '$app/stores'
import { Shipper as data } from '$lib/data/shipper'
import { error } from '@sveltejs/kit'
import type { PageLoad } from './$types'

export const load = (async ({ params }) => {
	const limit = 10
	const offset = 0
	const items = await data.fetchPaged(limit, offset)

	if (items) {
		return items
	}
	throw error(404, 'Not found')
}) satisfies PageLoad
;null as any as PageLoad;