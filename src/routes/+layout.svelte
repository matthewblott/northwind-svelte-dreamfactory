<script>
	import '@picocss/pico/css/pico.fluid.classless.min.css'
	import { onMount } from 'svelte'
	import Header from './Header.svelte'
	// import { page } from '$app/stores'

	let title = 'Home'

	onMount(() => {
		console.log('mounted')
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<header>
	<Header />
</header>

<main>
	<slot />
</main>
