<script lang="ts">
	import '@picocss/pico/css/pico.min.css'
	import '../app.css'
	import { SafeArea } from 'capacitor-plugin-safe-area'
	import { onMount } from 'svelte'

	let title = 'Home'

	$: height = 0

	onMount(() => {
		SafeArea.getStatusBarHeight().then(({ statusBarHeight }) => {
			height = statusBarHeight
		})
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div style="height: {height}px" />
<slot />
