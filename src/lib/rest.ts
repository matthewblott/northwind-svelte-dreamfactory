import { api_key } from './keys'
import { CategorySchema } from './schema.ts'

const base_url = 'http://localhost:8000/api/v2/northwind'

// Base

const fetchAll = async (table_name: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}`
	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

const fetchById = async (table_name: string, id: number) => {
	const url = `${base_url}/_table/${table_name}/${id}?api_key=${api_key}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

const create = async (table_name: string, body: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}`

	const response = await fetch(url, { method: 'POST', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	// {"resource":[{"Id": l23}]}
	return response.json()
}

const update = async (table_name: string, id: number, body: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}/${id}`

	const response = await fetch(url, { method: 'PUT', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

const remove = async (table_name: string, id: number) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}/${id}`

	const response = await fetch(url, { method: 'DELETE', headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

// Categories

const Categories: any = {}

Categories.fetchAll = async () => {
	return fetchAll('categories')
}

Categories.fetchById = async (id: number) => {
	return fetchById('categories', id)
}

Categories.create = async (item: CategorySchema) => {
	const items = []

	items[0] = item

	const data = {
		resource: items
	}

	const body = JSON.stringify(data)

	create('categories', body)
}

Categories.update = async (item: CategorySchema) => {
	const id = item.CategoryId
	const body = JSON.stringify(item)

	update('categories', id, body)
}

Categories.remove = async (id: number) => {
	remove('categories', id)
}

// Regions

const Regions = {}

Regions.fetchAll = async () => {
	return fetchAll('regions')
}

Regions.fetchById = async (id) => {
	return fetchById('regions', id)
}

Regions.create = async (item) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})

	const table_name = 'regions'
	const url = `${base_url}/_table/${table_name}?api_key=${api_key}`

	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

export { Categories, Regions }
