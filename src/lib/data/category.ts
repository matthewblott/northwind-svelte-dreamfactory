import { Base as data } from './base.ts'
import { Category as schema } from '$lib/schema/category'

export const Category: any = {}

const table_name = 'categories'

Category.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Category.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

Category.fetchById = async (id: number) => {
	return data.fetchById(table_name, id)
}

Category.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].CategoryId

	return id
}

Category.update = async (item: schema) => {
	const id = item.CategoryId
	const body = JSON.stringify(item)

	data.update(table_name, id, body)
}

Category.remove = async (id: number) => {
	data.remove(table_name, id)
}
