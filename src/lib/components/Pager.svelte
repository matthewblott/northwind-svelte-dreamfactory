<script lang="ts">
	import { createEventDispatcher } from 'svelte'
	import { onMount } from 'svelte'

	let dispatch = createEventDispatcher()

	export let limit: number
	let offset: number
	export let count: number

	const roundedCount = (count: number, limit: number): number => {
		const roundedCount = count - (count % limit)
		return roundedCount
	}

	$: buttons = {
		first: {
			enabled: false
		},
		previous: {
			enabled: false
		},
		next: {
			enabled: true
		},
		last: {
			enabled: true
		}
	}

	const first = () => {
		offset = 1
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = false
		buttons.previous.enabled = false
		buttons.next.enabled = true
		buttons.last.enabled = true
	}

	const previous = () => {
		offset = offset - 1
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = offset > 1
		buttons.previous.enabled = offset > 1
		buttons.next.enabled = true
		buttons.last.enabled = true
	}

	const next = () => {
		offset = offset + 1
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = true
		buttons.previous.enabled = true
		const rc = roundedCount(count, limit)
		buttons.next.enabled = rc > offset
		buttons.last.enabled = rc > offset
	}

	const last = () => {
		offset = roundedCount(count, limit)
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = true
		buttons.previous.enabled = true
		buttons.next.enabled = false
		buttons.last.enabled = false
	}

	onMount(() => {
		offset = 1
		console.log(count)
	})
</script>

{#if buttons.first.enabled}
	<button on:click|preventDefault={first}>First</button>
{:else}
	<button disabled>First</button>
{/if}
{#if buttons.previous.enabled}
	<button on:click|preventDefault={previous}>Previous</button>
{:else}
	<button disabled>Previous</button>
{/if}
{#if buttons.next.enabled}
	<button on:click|preventDefault={next}>Next</button>
{:else}
	<button disabled>Next</button>
{/if}
{#if buttons.last.enabled}
	<button on:click|preventDefault={last}>Last</button>
{:else}
	<button disabled>Last</button>
{/if}
