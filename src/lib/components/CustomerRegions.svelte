<script lang="ts">
	import { Customer } from '$lib/data/customer'
	import { onMount } from 'svelte'
	let promise: any = Promise.resolve()

	export let region = ''

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
		<label for="Region">Region</label>
		<select name="Region" id="Region">
			<option value="" />
			{#each items as { Region }}
				{#if Region === region}
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
