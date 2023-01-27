<script lang="ts">
	import { Customer } from '$lib/data/customer'
	import { onMount } from 'svelte'
	let promise: any = Promise.resolve()

	export let value: string = ''
	export let name: string = 'Region'

	let items: any = []

	onMount(async () => {
		promise = await Customer.fetchRegions()
		items = promise.resource
	})
</script>

{#await promise}
	<p>Loading ...</p>
{:then}
	{#if items}
		<label for={name}>Region</label>
		<select {name} id={name}>
			{#each items as { Region }}
				{#if Region === value}
					<option value={Region} selected>{Region}</option>
				{:else}
					<option value={Region}>{Region}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
