export const load = async ({ fetch }) => {
	const fetchAll = async () => {
		const res = await fetch('http://localhost:8080/customers.json')
		const data = await res.json()
		return data
	}

	return {
		items: fetchAll()
	}
}
