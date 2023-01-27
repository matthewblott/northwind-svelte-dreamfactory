import { writable } from 'svelte/store'
import type { Order } from '$lib/schema/order'

import { Order as data } from '$lib/data/order'
import { error } from '@sveltejs/kit'

export let store = writable<Order[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
