<script>
	import '@picocss/pico/css/pico.fluid.classless.min.css'
	import { onMount } from 'svelte'
	import Header from './Header.svelte'
	import { page } from '$app/stores'

	onMount(() => {
		console.log('mounted')
	})
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>
<header>
	<Header />
</header>

<main>
	<slot />
</main>
