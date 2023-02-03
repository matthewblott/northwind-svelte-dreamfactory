<script>
	import '@picocss/pico/css/pico.classless.min.css'
	import Header from './Header.svelte'

	let title = 'Home'
</script>

<svelte:head>
	<title>{title}</title>
	<style>
		header {
			padding: 0 !important;
		}
		main {
			padding: 0 !important;
		}
		h1 {
			margin: 0 !important;
		}
		button {
			display: inline !important;
			width: fit-content !important;
		}
		.hidden {
			display: none;
		}
	</style>
</svelte:head>

<header>
	<Header />
</header>
<main>
	<slot />
</main>
