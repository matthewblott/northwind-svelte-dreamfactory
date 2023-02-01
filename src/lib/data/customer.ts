import { Base as data } from './base.ts'

const table_name = 'customers'
export const Customer: any = {}

Customer.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Customer.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Customer.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Customer.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].CustomerId

	return id
}

Customer.update = async (item: schema) => {
	const id = item.CustomerId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.CustomerId
}

Customer.remove = async (id: any) => {
	return await data.remove(table_name, id)
}

Customer.fetchRegions = async () => {
	const fieldName = 'Region'
	const res = await data.fetchDistinct(table_name, fieldName)

	return res
}
