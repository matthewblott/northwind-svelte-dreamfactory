import { writable } from 'svelte/store'
import type { Shipper } from '$lib/schema/shipper'

import { Shipper as data } from '$lib/data/shipper'
import { error } from '@sveltejs/kit'

export let store = writable<Shipper[]>([])

export async function fetchData() {
	const res = await data.fetchPaged()

	return res
}
