import { Base as data } from './base.ts'
import { Category as schema } from '$lib/schema/category'

export const Category: any = {}

Category.fetchAll = async () => {
	return data.fetchAll('categories')
}

Category.fetchPaged = async (page: number) => {
	const limit = 10
	const offset = page

	return data.fetchPaged('categories', limit, offset)
}

Category.fetchById = async (id: number) => {
	return data.fetchById('categories', id)
}

Category.create = async (item: schema) => {
	const items = []

	items[0] = item

	const data = {
		resource: items
	}

	const body = JSON.stringify(data)
	const json = await data.create('categories', body)
	const resource = json.resource
	const id = resource[0].CategoryId

	return id
}

Category.update = async (item: schema) => {
	const id = item.CategoryId
	const body = JSON.stringify(item)

	data.update('categories', id, body)
}

Category.remove = async (id: number) => {
	data.remove('categories', id)
}
