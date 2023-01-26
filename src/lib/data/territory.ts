import { Base as data } from './base.ts'

const table_name = 'territories'
export const Territory: any = {}

Territory.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Territory.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Territory.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Territory.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].TerritoryId

	return id
}

Territory.update = async (item: schema) => {
	const id = item.TerritoryId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.TerritoryId
}

Territory.remove = async (id: number) => {
	return await data.remove(table_name, id)
}

// Territory.fetchRegions = async () => {
// 	const fieldName = 'Region'
// 	const res = await data.fetchDistinct(table_name, fieldName)
//
// 	return res
// }
