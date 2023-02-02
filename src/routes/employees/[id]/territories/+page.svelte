<script lang="ts">
	import { onMount } from 'svelte'
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { fetchData } from './store'
	import { goto } from '$app/navigation'
	import Pager from '$lib/components/Pager.svelte'
	import { page } from '$app/stores'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const employeeId = parseInt(paths[1])

	$: items = []
	$: count = 0

	const next = (args: any) => {
		const offset = args.detail.offset
		update(offset)
	}

	const update = async (offset = 0) => {
		const limit = 10

		const data = await fetchData(limit, offset, employeeId)
		const url = `/employees/${employeeId}/territories?limit=${limit}&offset=${offset}`

		goto(url)

		count = data.meta.count
		items = data.resource
	}

	onMount(() => {
		update()
	})
</script>

<h1>Territories</h1>

<Pager limit={10} {count} on:next={next} />

<table role="grid">
	<thead>
		<th scope="col">Territory Id</th>
		<th scope="col">Territory Description</th>
		<th>
			<a href="/employees/{employeeId}/territories/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each items as { EmployeeId, TerritoryId, TerritoryDescription }}
			<tr>
				<td scope="row">{TerritoryId}</td>
				<td>{TerritoryDescription}</td>
				<td>
					<a href="/employees/{EmployeeId}/territories/{TerritoryId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
