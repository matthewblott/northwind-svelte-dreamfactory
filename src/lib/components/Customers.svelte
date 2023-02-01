<script lang="ts">
	import { Customer as api } from '$lib/data/customer'
	import { onMount } from 'svelte'
	let promise: any = Promise.resolve()

	export let value: string
	export let name: string = 'Customer'

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
		<label for={name}>Customer</label>
		<select {name} id={name}>
			<option value="" />
			{#each items as { CustomerId, CompanyName }}
				{#if CustomerId === value}
					<option value={CustomerId} selected>{CompanyName}</option>
				{:else}
					<option value={CustomerId}>{CompanyName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
