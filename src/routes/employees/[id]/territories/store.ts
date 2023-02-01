import { writable } from 'svelte/store'
import type { EmployeeTerritory } from '$lib/schema/employee-territory'

import { EmployeeTerritory as data } from '$lib/data/employee-territory'
import { error } from '@sveltejs/kit'

export let store = writable<Territory[]>([])

export async function fetchData(limit: number, offset: number, employeeId: number) {
	const filter = `EmployeeId=${employeeId}`
	return await data.fetchFilteredPaged(limit, offset, filter)
}
