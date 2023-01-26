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

	// const pageCount = (roundedCount, limit) => {
	// 	 return roundedCount / limit
	// }
	// const pageNumber = (roundedCount, pageCount, offset) => {
	//   return (offset / roundedCount) * pageCount + 1
	// }

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
		offset = 0
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = false
		buttons.previous.enabled = false
		buttons.next.enabled = true
		buttons.last.enabled = true
	}

	const previous = () => {
		offset = offset - limit
		dispatch('next', {
			offset: offset
		})
		buttons.first.enabled = offset > 0
		buttons.previous.enabled = offset > 0
		buttons.next.enabled = true
		buttons.last.enabled = true
	}

	const next = () => {
		offset = offset + limit
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
		offset = 0
		console.log(count)
	})
</script>

<nav>
	<ul>
		<li>
			{#if buttons.first.enabled}
				<a href="#" on:click|preventDefault={first}>First</a>
			{:else}
				<a href="#" disabled class="disabled">First</a>
			{/if}
		</li>
		<li>
			{#if buttons.previous.enabled}
				<a href="#" on:click|preventDefault={previous}>Previous</a>
			{:else}
				<a href="#" disabled class="disabled">Previous</a>
			{/if}
		</li>
		<li>
			{#if buttons.next.enabled}
				<a href="#" on:click|preventDefault={next}>Next</a>
			{:else}
				<a href="#" disabled class="disabled">Next</a>
			{/if}
		</li>
		<li>
			{#if buttons.last.enabled}
				<a href="#" on:click|preventDefault={last}>Last</a>
			{:else}
				<a href="#" disabled class="disabled">Last</a>
			{/if}
		</li>
	</ul>
</nav>

<style>
	.disabled {
		color: grey;
	}
</style>
