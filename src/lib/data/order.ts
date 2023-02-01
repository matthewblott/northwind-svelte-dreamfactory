import { Base as data } from './base.ts'

const table_name = 'orders'
export const Order: any = {}

Order.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Order.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Order.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Order.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].OrderId

	return id
}

Order.update = async (item: schema) => {
	const id = item.OrderId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.OrderId
}

Order.remove = async (id: number) => {
	return await data.remove(table_name, id)
}

Order.fetchRegions = async () => {
	const fieldName = 'ShipRegion'
	const res = await data.fetchDistinct(table_name, fieldName)

	return res
}
