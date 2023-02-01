<script lang="ts">
	import { Shipper as api } from '$lib/data/shipper'
	import { onMount } from 'svelte'
	import Validation from './Validation.svelte'

	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'Shipper'

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
		<label for={name}>Shipper</label>
		<select {name} id={name}>
			<option />
			{#each items as { ShipperId, CompanyName }}
				{#if ShipperId === value}
					<option value={ShipperId} selected>{CompanyName}</option>
				{:else}
					<option value={ShipperId}>{CompanyName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
<Validation {name} />
