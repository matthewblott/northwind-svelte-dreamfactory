import { Base as data } from './base.ts'

const table_name = 'suppliers'
export const Supplier: any = {}

Supplier.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Supplier.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Supplier.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Supplier.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].SupplierId

	return id
}

Supplier.update = async (item: schema) => {
	const id = item.SupplierId
	const body = JSON.stringify(item)

	const json = await data.update(table_name, id, body)

	return json.SupplierId
}

Supplier.remove = async (id: number) => {
	return await data.remove(table_name, id)
}

Supplier.fetchRegions = async () => {
	const fieldName = 'Region'
	const res = await data.fetchDistinct(table_name, fieldName)

	return res
}
