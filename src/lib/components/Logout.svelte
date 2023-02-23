<script lang="ts">
	import { goto } from '$app/navigation'
	import { Auth } from '$lib/auth'

	const logout = () => {
		Auth.logout()
		goto('/login')
	}
</script>

<a on:click|preventDefault={logout}>Logout</a>
