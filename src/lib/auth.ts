import { UserSessionSchema } from '$lib/schema/user-session.ts'
import { sessionStore, isLoggedIn } from '$lib/stores/session.ts'

let UserInfo = {}

const Auth = {}
// let domain = '10.0.2.2'
let domain = 'localhost'
const base_url = `http://${domain}:8000/api/v2`

Auth.login = async (email: string, password: string) => {
	const headers = new Headers({
		'Content-Type': 'application/json'
	})

	const credentials = {
		email: email,
		password: password
	}

	const body = JSON.stringify(credentials)
	const url = `${base_url}/user/session`
	const response = await fetch(url, { method: 'POST', headers: headers, body })

	if (!response.ok) {
		throw new Error(response.statusText)
	}

	const json = await response.json()
	const parseResult = UserSessionSchema.safeParse(json)

	if (parseResult.success) {
		sessionStore.set(parseResult.data)
		isLoggedIn.set(true)
		return true
	}

	return false
}

Auth.logout = () => {
	sessionStore.set(null)
	isLoggedIn.set(false)
}

export { Auth, UserInfo }
