<script lang="ts">
	import { sessionStore } from '$lib/stores/session'

	let isLoggedIn: boolean

	import { Auth } from '$lib/auth'
	// let session = {}

	sessionStore.subscribe((value) => {
		// if (value !== null) {
		// 	session = value
		// }
		isLoggedIn = value !== null
	})

	const logout = () => {
		Auth.logout()
	}

	// const caption = () => {
	// 	const session_token = session.session_token
	//
	// 	if (session_token === undefined) {
	// 		return 'Login'
	// 	} else {
	// 		return 'Logout'
	// 	}
	// }
</script>

{#if isLoggedIn}
	<button on:click={logout}>Logout</button>
{:else}
	<a href="/login" role="button">Login</a>
{/if}
