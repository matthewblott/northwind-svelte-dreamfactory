import { writable } from 'svelte/store'
import type { Territory } from '$lib/schema/territory'

import { Territory as data } from '$lib/data/territory'
import { error } from '@sveltejs/kit'

export let store = writable<Territory[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
