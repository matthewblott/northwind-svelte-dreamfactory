import { Base } from './base.ts'

export const Region = {}

Region.fetchAll = async () => {
	return Base.fetchAll('regions')
}

Region.fetchById = async (id) => {
	return Base.fetchById('regions', id)
}

Region.create = async (item) => {
	const items = []

	items[0] = item

	const data = {
		resource: items
	}

	const body = JSON.stringify(data)
	const json = await Base.create('regions', body)
	const resource = json.resource
	const id = resource[0].CategoryId

	return id
}
