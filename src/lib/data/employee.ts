import { Base as data } from './base.ts'

const table_name = 'employees'
export const Employee: any = {}

Employee.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Employee.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Employee.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Employee.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].EmployeeId

	return id
}

Employee.update = async (item: schema) => {
	const id = item.EmployeeId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.EmployeeId
}

Employee.remove = async (id: number) => {
	return await data.remove(table_name, id)
}

Employee.fetchRegions = async () => {
	const fieldName = 'Region'
	const res = await data.fetchDistinct(table_name, fieldName)

	return res
}
