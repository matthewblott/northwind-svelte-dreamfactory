<script lang="ts">
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { goto } from '$app/navigation'
	import { fetchData } from './store'
	import type { PageData } from './$types'
	import Pager from '$lib/components/Pager.svelte'

	export let data: PageData

	$: promise = data
	$: count = promise.meta.total

	const next = async (args: any) => {
		const offset = args.detail.offset
		const limit = 10
		const url = `?limit=${limit}&offset=${offset}`

		goto(url)

		promise = await fetchData(limit, offset)
		count = promise.meta.count
	}
</script>

<h1>Categories</h1>
<Pager limit={10} {count} on:next={next} />

{#await promise}
	<p>waiting for the promise to resolve...</p>
{:then value}
	<table role="grid">
		<thead>
			<th scope="col"> Id </th>
			<th scope="col">Name</th>
			<th>
				<a href="/categories/new"><PlusSquare /></a>
			</th>
		</thead>
		<tbody>
			{#each value.data as { id, attributes }}
				<tr>
					<td scope="row">
						{id}
					</td>
					<td>{attributes.categoryName}</td>
					<td>
						<a href="/categories/{id}"><Edit /></a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:catch error}
	{error}
{/await}
