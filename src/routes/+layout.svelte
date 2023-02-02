<script>
	import '@picocss/pico/css/pico.fluid.classless.min.css'
	import Header from './Header.svelte'

	let title = 'Home'
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
