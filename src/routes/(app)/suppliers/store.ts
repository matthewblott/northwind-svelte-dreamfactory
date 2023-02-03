import { writable } from 'svelte/store'
import type { Supplier } from '$lib/schema/supplier'

import { Supplier as data } from '$lib/data/supplier'
import { error } from '@sveltejs/kit'

export let store = writable<Supplier[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
