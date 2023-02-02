import { Base as data } from './base.ts'
import type { EmployeeTerritory as T } from '$lib/schema/employee-territory'

import { EmployeeTerritorySchema as S } from '$lib/schema/employee-territory'

const table_name = 'employeeterritories'
export const EmployeeTerritory: any = {}
import { z } from 'zod'

EmployeeTerritory.fetchAll = async () => {
	return data.fetchAll(table_name)
}

EmployeeTerritory.fetchFilteredPaged = async (limit: number, offset: number, filter: string) => {
	return await data.fetchFilteredPaged('EmployeeTerritoriesView', limit, offset, filter)
}

EmployeeTerritory.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

EmployeeTerritory.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

EmployeeTerritory.create = async (item: T) => {
	const items = []

	items[0] = S.parse(item)

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const fields = 'EmployeeId,TerritoryId'
	const json = await data.createByFields(table_name, fields, body)
	const resource = json.resource
	const id = resource[0].TerritoryId

	return id
}

EmployeeTerritory.update = async (item: schema) => {
	const id = item.TerritoryId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.TerritoryId
}

EmployeeTerritory.remove = async (employeeId: number, territoryId: number) => {
	const filter = `(EmployeeId=${employeeId})and(TerritoryId=${territoryId})`
	return await data.removeByFilter(table_name, filter)
}
