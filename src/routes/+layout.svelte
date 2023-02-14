<script>
	import '@picocss/pico/css/pico.min.css'

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
			margin-bottom: 20px !important;
		}
		button {
			display: inline !important;
			width: fit-content !important;
			padding-top: 5px !important;
			padding-bottom: 5px !important;
			padding-left: 5px !important;
			padding-right: 5px !important;
			padding: 13px !important;
		}
		label {
			padding-left: 20px;
		}
		.hidden {
			display: none;
		}
		.filler {
			height: 10px;
		}
	</style>
</svelte:head>
<slot />
