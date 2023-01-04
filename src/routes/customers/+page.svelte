<script>
	export let data

	const items = data.items
</script>

<h1>Regions</h1>
<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Description</th>
	</thead>
	<tbody>
		{#each items as { CustomerId, CompanyName }}
			<tr>
				<th scope="row"><a href="/regions/{CustomerId}">{CustomerId}</a> </th>
				<td>{CompanyName}</td>
			</tr>
		{/each}
	</tbody>
</table>
