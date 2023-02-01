<script lang="ts">
	import { Supplier as api } from '$lib/data/supplier'
	import { onMount } from 'svelte'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'Supplier'

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
		<label for={name}>Supplier</label>
		<select {name} id={name}>
			<option />
			{#each items as { SupplierId, CompanyName }}
				{#if SupplierId === value}
					<option value={SupplierId} selected>{CompanyName}</option>
				{:else}
					<option value={SupplierId}>{CompanyName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
