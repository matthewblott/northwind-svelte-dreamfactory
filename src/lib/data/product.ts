import { Base as data } from './base.ts'

const table_name = 'products'
export const Product: any = {}

Product.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Product.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Product.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Product.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].ProductId

	return id
}

Product.update = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const id = item.ProductId
	const fields = 'ProductId'
	const json = await data.updateByFields(table_name, fields, body)

	return id
}

Product.remove = async (id: number) => {
	return await data.remove(table_name, id)
}
