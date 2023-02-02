import { Base as data } from './base.ts'

const table_name = 'orderdetails'
export const OrderDetails: any = {}

OrderDetails.fetchAll = async () => {
	return data.fetchAll(table_name)
}

OrderDetails.fetchPaged = async (limit: number, offset: number) => {
	return await data.fetchPaged(table_name, limit, offset)
}

OrderDetails.fetchById = async (orderId: number, productId: number) => {
	const filter = `(OrderId=${orderId})and(ProductId=${productId})`

	return await data.fetchFiltered('OrderDetailsView', filter)
}

OrderDetails.fetchFilteredPaged = async (limit: number, offset: number, filter: string) => {
	return await data.fetchFilteredPaged('OrderDetailsView', limit, offset, filter)
}

OrderDetails.create = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const json = await data.create(table_name, body)
	const resource = json.resource
	const id = resource[0].OrderDetailsId

	return id
}

OrderDetails.update = async (item: schema) => {
	const items = []

	items[0] = item

	const wrapper = {
		resource: items
	}

	const body = JSON.stringify(wrapper)
	const fields = 'OrderId,ProductId'
	const json = await data.updateByFields(table_name, fields, body)

	return json.OrderDetailsId
}

OrderDetails.remove = async (orderId: number, productId: number) => {
	const filter = `(OrderId=${orderId})and(ProductId=${productId})`
	return await data.removeByFilter(table_name, filter)
}
