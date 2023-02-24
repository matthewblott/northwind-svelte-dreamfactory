<script lang="ts">
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { goto } from '$app/navigation'
	import { fetchData } from './store'
	import type { PageData } from './$types'
	import Pager from '$lib/components/Pager.svelte'

	export let data: PageData

	$: promise = data
	$: count = promise.meta.count

	const next = async (args: any) => {
		const offset = args.detail.offset
		const limit = 10
		const url = `?limit=${limit}&offset=${offset}`

		goto(url)

		promise = await fetchData(limit, offset)
		count = promise.meta.count
	}
</script>

<h1>Employees</h1>
<Pager limit={10} {count} on:next={next} />

{#await promise}
	<p>waiting for the promise to resolve...</p>
{:then value}
	<table role="grid">
		<thead>
			<th scope="col"> Id </th>
			<th scope="col">Name</th>
			<th>
				<a href="/employees/new"><PlusSquare /></a>
			</th>
		</thead>
		<tbody>
			{#each value.resource as { EmployeeId, FirstName, LastName }}
				<tr>
					<td scope="row">
						{EmployeeId}
					</td>
					<td>{FirstName} {LastName}</td>
					<td>
						<a href="/employees/{EmployeeId}"><Edit /></a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
{:catch error}
	{error}
{/await}
