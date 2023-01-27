<script lang="ts">
	import { onMount } from 'svelte'
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { fetchData } from './store'
	import { goto } from '$app/navigation'
	import Pager from '$lib/components/Pager.svelte'

	$: items = []
	$: count = 0

	const next = (args: any) => {
		const offset = args.detail.offset
		update(offset)
	}

	const update = async (offset = 0) => {
		const limit = 10
		const data = await fetchData(limit, offset)
		const url = `/employees?limit=${limit}&offset=${offset}`

		goto(url)

		count = data.meta.count
		items = data.resource
	}

	onMount(() => {
		update()
	})
</script>

<h1>Employees</h1>

<Pager limit={10} {count} on:next={next} />

<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
		<th>
			<a href="/employees/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each items as { EmployeeId, FirstName, LastName }}
			<tr>
				<th scope="row">
					{EmployeeId}
				</th>
				<td>{FirstName} {LastName}</td>
				<td>
					<a href="/employees/{EmployeeId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
