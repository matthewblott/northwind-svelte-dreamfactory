import { writable } from 'svelte/store'
import type { Employee } from '$lib/schema/employee'

import { Employee as data } from '$lib/data/employee'
import { error } from '@sveltejs/kit'

export let store = writable<Employee[]>([])

export async function fetchData(limit: number, offset: number) {
	return await data.fetchPaged(limit, offset)
}
