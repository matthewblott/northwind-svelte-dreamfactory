import { writable } from 'svelte/store'
import type { Product } from '$lib/schema/product'

import { Product as data } from '$lib/data/product'
import { error } from '@sveltejs/kit'

export let store = writable<Product[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
