import { api_key } from '$lib/keys'
import { sessionStore } from '$lib/stores/session.ts'
const scheme = 'http'
const app_name = 'northwind_sqlite'
const host_name = 'localhost:8000'
const base_url = `${scheme}://${host_name}/api/v2/${app_name}`
const Base = {}

const headers = new Headers({
	'Content-Type': 'application/json'
})

const baseAction = async (url: string, action: string, body: string) => {
	let info
	sessionStore.subscribe((value) => {
		info = value
	})

	const headers = new Headers({
		'Content-Type': 'application/json',
		'X-DreamFactory-API-Key': api_key,
		'X-DreamFactory-Session-Token': info.session_token
	})
	let response
	if (body === undefined || body === '') {
		response = await fetch(url, { method: action, headers: headers })
	} else {
		response = await fetch(url, { method: action, headers: headers, body })
	}

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	return response.json()
}

const baseFetch = async (url: string) => {
	return baseAction(url, 'GET')
}

const baseCreate = async (url: string, body: string) => {
	return baseAction(url, 'POST', body)
}

const baseUpdate = async (url: string, body: string) => {
	return baseAction(url, 'PUT', body)
}

const baseRemove = async (url: string) => {
	return baseAction(url, 'DELETE')
}

Base.fetchAll = async (table_name: string) => {
	const url = `${base_url}/_table/${table_name}`
	return baseFetch(url)
}

Base.fetchDistinct = async (table_name: string, field_name: string) => {
	const url = `${base_url}/_table/${table_name}?fields=${field_name}&group=${field_name}&filter=${field_name} is not null`
	return baseFetch(url)
}

Base.fetchPaged = async (table_name: string, limit: number, offset: number) => {
	const url = `${base_url}/_table/${table_name}?limit=${limit}&offset=${offset}&include_count=true`
	return baseFetch(url)
}

Base.fetchFiltered = async (table_name: string, filter: string) => {
	const url = `${base_url}/_table/${table_name}?filter=${filter}`
	return baseFetch(url)
}

Base.fetchFilteredPaged = async (
	table_name: string,
	limit: number,
	offset: number,
	filter: string
) => {
	const url = `${base_url}/_table/${table_name}?limit=${limit}&offset=${offset}&include_count=true&filter=${filter}`
	return baseFetch(url)
}

Base.fetchById = async (table_name: string, id: any) => {
	const url = `${base_url}/_table/${table_name}/${id}`
	return baseFetch(url)
}

Base.create = async (table_name: string, body: string) => {
	const url = `${base_url}/_table/${table_name}`
	return baseCreate(url, body)
}

Base.createByFields = async (table_name: string, fields: string, body: string) => {
	const url = `${base_url}/_table/${table_name}?id_field=${fields}`
	return baseCreate(url, body)
}

Base.updateById = async (table_name: string, id: number, body: string) => {
	const url = `${base_url}/_table/${table_name}/${id}`
	return baseUpdate(url, body)
}

// obsolete, use updateById method instead
Base.update = async (table_name: string, id: number, body: string) => {
	return await Base.updateById(table_name, id, body)
}

Base.updateByFields = async (table_name: string, fields: number, body: string) => {
	// todo: refactor the hack below
	body = body.replace(':true', ':1')
	const url = `${base_url}/_table/${table_name}?id_field=${fields}`
	return baseUpdate(url, body)
}

Base.remove = async (table_name: string, id: any) => {
	const url = `${base_url}/_table/${table_name}/${id}`
	return baseRemove(url)
}

Base.removeByFilter = async (table_name: string, filter: string) => {
	const url = `${base_url}/_table/${table_name}?filter=${filter}`
	return baseRemove(url)
}
export { Base }
