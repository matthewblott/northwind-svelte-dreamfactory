<script>
	import { Region } from '$lib/data/region'
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import Pager from '$lib/components/Pager.svelte'

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
		<Pager />
		<table role="grid">
			<thead>
				<th scope="col"> Id </th>
				<th scope="col">Description</th>
				<th>
					<a href="#" disabled><PlusSquare /></a>
				</th>
			</thead>
			<tbody>
				{#each items as { RegionId, RegionDescription }}
					<tr>
						<th scope="row">
							{RegionId}
						</th>
						<td>{RegionDescription}</td>
						<td>
							<a href="/regions/{RegionId}"><Edit /></a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
