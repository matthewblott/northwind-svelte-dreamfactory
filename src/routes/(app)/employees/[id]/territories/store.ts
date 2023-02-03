import { writable } from 'svelte/store'
import { error } from '@sveltejs/kit'
import { EmployeeTerritory as data } from '$lib/data/employee-territory'
import type { EmployeeTerritoryView } from '$lib/schema/employee-territory'

export let store = writable<Territory[]>([])

export async function fetchData(limit: number, offset: number, employeeId: number) {
	const filter = `EmployeeId=${employeeId}`
	return await data.fetchFilteredPaged(limit, offset, filter)
}
