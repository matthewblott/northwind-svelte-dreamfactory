<script lang="ts">
	import { Category as api } from '$lib/data/category'
	import { onMount } from 'svelte'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'Category'

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
		<label for={name}>Category</label>
		<select {name} id={name}>
			<option />
			{#each items as { CategoryId, CategoryName }}
				{#if CategoryId === value}
					<option value={CategoryId} selected>{CategoryName}</option>
				{:else}
					<option value={CategoryId}>{CategoryName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
