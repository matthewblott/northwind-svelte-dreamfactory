import { Base as data } from './base.ts'

const table_name = 'regions'
export const Region: any = {}

Region.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Region.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Region.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Region.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].RegionId

	return id
}

Region.update = async (item: schema) => {
	const id = item.RegionId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.RegionId
}

Region.remove = async (id: number) => {
	return await data.remove(table_name, id)
}
