<script>
	import Header from './Header.svelte'
	import '@picocss/pico/css/pico.min.css'
	import { isLoggedIn } from '$lib/stores/session'
	import Redirect from './Redirect.svelte'
</script>

{#if $isLoggedIn}
	<header class="container">
		<Header />
	</header>
	<main class="container">
		<slot />
	</main>
{:else}
	<Redirect />
{/if}
