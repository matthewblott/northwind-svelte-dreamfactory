<script lang="ts">
	import { Product as api } from '$lib/data/product'
	import { onMount } from 'svelte'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'Product'

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
		<label for={name}>Product</label>
		<select {name} id={name}>
			<option value="" />
			{#each items as { ProductId, ProductName }}
				{#if ProductId === value}
					<option value={ProductId} selected>{ProductName}</option>
				{:else}
					<option value={ProductId}>{ProductName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
