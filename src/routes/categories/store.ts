import { writable } from 'svelte/store'
import type { Category } from '$lib/schema/category'

import { Category as data } from '$lib/data/category'
import { error } from '@sveltejs/kit'

export let store = writable<Category[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
