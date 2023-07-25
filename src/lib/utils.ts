import { PUBLIC_HOST_IP } from '$env/static/public'
import { Capacitor } from '@capacitor/core'

const setTitle = (title) => {
	document.title = title
}

const getTitle = () => {
	return document.title
}

const getHost = () => {
	let domain = 'localhost'

	const platform = Capacitor.getPlatform()

	if (platform === 'android') {
		domain = PUBLIC_HOST_IP
	}

	const port = 5000
	const host = `${domain}:${port}`

	return host
}

export { getTitle, setTitle, getHost }
