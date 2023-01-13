import { Base as data } from './base.ts'

const table_name = 'shippers'
export const Shipper: any = {}

Shipper.fetchAll = async () => {
	return data.fetchAll(table_name)
}

Shipper.fetchById = async (id) => {
	return data.fetchById(table_name, id)
}

Shipper.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].ShipperId

	return id
}

Shipper.update = async (item: schema) => {
	const id = item.ShipperId
	const body = JSON.stringify(item)

	data.update(table_name, id, body)
}

Shipper.remove = async (id: number) => {
	data.remove(table_name, id)
}
