import { api_key } from '$lib/keys'

const base_url = 'http://localhost:8000/api/v2/northwind'

const Base = {}

Base.fetchAll = async (table_name: string) => {
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

Base.fetchPaged = async (table_name: string, limit: number, offset: number) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}&limit=${limit}&offset=${offset}$include_count=true`
	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.fetchById = async (table_name: string, id: number) => {
	const url = `${base_url}/_table/${table_name}/${id}?api_key=${api_key}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.create = async (table_name: string, body: string): number => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}`

	const response = await fetch(url, { method: 'POST', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.update = async (table_name: string, id: number, body: string) => {
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

Base.remove = async (table_name: string, id: number) => {
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

export { Base }
