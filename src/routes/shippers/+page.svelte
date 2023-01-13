<script lang="ts">
	import { Edit, PlusSquare } from 'lucide-svelte'
	export let data: any
	let message: string = 'Shippers'
</script>

<h1>
	{message}
</h1>

<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
		<th>
			<a href="/shippers/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each data.resource as { ShipperId, CompanyName }}
			<tr>
				<th scope="row">
					{ShipperId}
				</th>
				<td>{CompanyName}</td>
				<td>
					<a href="/shippers/{ShipperId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
