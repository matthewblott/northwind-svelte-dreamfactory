<script lang="ts">
	import { Region as api } from '$lib/data/region'
	import { onMount } from 'svelte'
	let promise: any = Promise.resolve()

	export let regionId: number

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
		<label for="Region">Region</label>
		<select name="Region" id="Region">
			<option value="" />
			{#each items as { RegionId, RegionDescription }}
				{#if RegionId === regionId}
					<option value={RegionId} selected>{RegionDescription}</option>
				{:else}
					<option value={RegionId}>{RegionDescription}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
