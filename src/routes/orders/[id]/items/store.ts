import { writable } from 'svelte/store'
import type { OrderDetails } from '$lib/schema/order-details'

import { OrderDetails as data } from '$lib/data/order-details'
import { error } from '@sveltejs/kit'

export let store = writable<OrderDetails[]>([])

export async function fetchData(limit: number, offset: number, orderId: number) {
	const filter = `OrderId=${orderId}`
	return await data.fetchFilteredPaged(limit, offset, filter)
}
