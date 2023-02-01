<script lang="ts">
	import { Territory as api } from '$lib/data/territory'
	import { onMount } from 'svelte'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'Territory'

	let items: any = []

	onMount(async () => {
		promise = await api.fetchAll()
		items = promise.resource
	})
</script>

{#await promise}
	<p>Loading ...</p>
{:then}
	{#if items}
		<label for={name}>Territory</label>
		<select {name} id={name}>
			<option />
			{#each items as { TerritoryId, TerritoryDescription }}
				{#if TerritoryId === value}
					<option value={TerritoryId} selected>{TerritoryDescription}</option>
				{:else}
					<option value={TerritoryId}>{TerritoryDescription}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
