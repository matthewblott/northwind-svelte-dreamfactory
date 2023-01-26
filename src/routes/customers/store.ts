import { writable } from 'svelte/store'
import type { Customer } from '$lib/schema/customer'

import { Customer as data } from '$lib/data/customer'
import { error } from '@sveltejs/kit'

export let store = writable<Customer[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}

export const getPageNumber = (number_of_records: number, limit: number, offset: number) => {
	const number_count = number_of_records - (number_of_records % limit)
	const number_of_pages = number_count / limit
	const page_number = (offset / number_count) * number_of_pages + 1

	return page_number
}
