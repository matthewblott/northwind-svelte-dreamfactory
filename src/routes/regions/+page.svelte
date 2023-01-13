<script>
	import { Region } from '$lib/data/region'
	import { onMount } from 'svelte'

	let promise = Promise.resolve([])

	$: items = []

	onMount(async () => {
		promise = await Region.fetchAll()
		items = promise.resource
	})
</script>

<h1>Regions</h1>

{#await promise}
	<p>Loading ...</p>
{:then}
	{#if items}
		<table role="grid">
			<thead>
				<th scope="col"> Id </th>
				<th scope="col">Description</th>
			</thead>
			<tbody>
				{#each items as { RegionId, RegionDescription }}
					<tr>
						<th scope="row"><a href="/regions/{RegionId}">{RegionId}</a> </th>
						<td>{RegionDescription}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
