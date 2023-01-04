import { api_key } from './keys'

const table_name = 'regions'

const base_url = 'http://localhost:8000/api/v2/northwind'

// Regions

const Regions = {}

Regions.fetchAll = async () => {
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

Regions.fetchById = async (id) => {
	const url = `${base_url}/_table/${table_name}/${id}?api_key=${api_key}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Regions.create = async (item) => {
	// Create
	// -d "{\"resource\":[{\"RegionDescription\":\"Dreamfactory POST test\"}]}"

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

export { Regions }
