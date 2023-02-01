import { OrderDetails as data } from '$lib/data/order-details'
import type { OrderDetails as schema } from '$lib/schema/order-details'
import { error } from '@sveltejs/kit'

export const load = async ({ params, url }): schema => {
	const paths = url.pathname.split('/').filter((item) => item !== '')
	const orderId = paths[1]
	const productId = params.id
	const item = await data.fetchById(orderId, productId)

	if (item) {
		return item
	}
	throw error(404, 'Not found')
}
