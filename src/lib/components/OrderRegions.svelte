<script lang="ts">
	import { Order } from '$lib/data/order'
	import { onMount } from 'svelte'
	import { capitalCase } from 'change-case'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: string
	export let name: string

	let items: any = []

	const caption = () => {
		return capitalCase(name)
	}

	onMount(async () => {
		promise = await Order.fetchRegions()
		items = promise.resource
	})
</script>

{#await promise}
	<p>Loading ...</p>
{:then}
	{#if items}
		<label for={name}>{caption()}</label>
		<select {name} id={name}>
			<option />
			{#each items as { ShipRegion }}
				{#if ShipRegion === value}
					<option value={ShipRegion} selected>{ShipRegion}</option>
				{:else}
					<option value={ShipRegion}>{ShipRegion}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
