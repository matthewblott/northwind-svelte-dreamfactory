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

Base.fetchDistinct = async (table_name: string, field_name: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}&fields=${field_name}&group=${field_name}&filter=${field_name} is not null`
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

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}&limit=${limit}&offset=${offset}&include_count=true`
	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.fetchFiltered = async (table_name: string, filter: string) => {
	const headers = new Headers({
		'content-type': 'application/json'
	})

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}&filter=${filter}`
	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new error(response.statustext)
	}

	return response.json()
}

Base.fetchFilteredPaged = async (
	table_name: string,
	limit: number,
	offset: number,
	filter: string
) => {
	const headers = new Headers({
		'content-type': 'application/json'
	})

	const url = `${base_url}/_table/${table_name}?api_key=${api_key}&limit=${limit}&offset=${offset}&include_count=true&filter=${filter}`
	const response = await fetch(url, { headers: headers })

	if (!response.ok) {
		throw new error(response.statustext)
	}

	return response.json()
}

Base.fetchById = async (table_name: string, id: any) => {
	const url = `${base_url}/_table/${table_name}/${id}?api_key=${api_key}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.create = async (table_name: string, body: string) => {
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

Base.createByFields = async (table_name: string, fields: string, body: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}?id_field=${fields}`
	const response = await fetch(url, { method: 'POST', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.updateById = async (table_name: string, id: number, body: string) => {
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

// obsolete, use updateById method instead
Base.update = async (table_name: string, id: number, body: string) => {
	return await Base.updateById(table_name, id, body)
}

Base.updateByFields = async (table_name: string, fields: number, body: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}?id_field=${fields}`

	const response = await fetch(url, { method: 'PUT', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

Base.remove = async (table_name: string, id: any) => {
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

Base.removeByFilter = async (table_name: string, filter: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key
	})

	const url = `${base_url}/_table/${table_name}?filter=${filter}`

	const response = await fetch(url, { method: 'DELETE', headers: headers })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}
export { Base }
