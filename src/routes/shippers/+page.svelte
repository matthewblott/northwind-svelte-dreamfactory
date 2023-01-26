<script lang="ts">
	import { Edit, PlusSquare } from 'lucide-svelte'
	import { onMount } from 'svelte'
	import { store, fetchData } from './store'

	$: shippers = []

	onMount(() => {
		update()
	})

	const update = async () => {
		const data = await fetchData()
		store.set(data)
		shippers = data.resource
	}
</script>

<h1>Shippers</h1>

<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
		<th>
			<a href="/shippers/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each shippers as { ShipperId, CompanyName }}
			<tr>
				<th scope="row">
					{ShipperId}
				</th>
				<td>
					{CompanyName}
				</td>
				<td>
					<a href="/shippers/{ShipperId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
