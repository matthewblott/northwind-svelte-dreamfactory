<script>
	export let data
</script>

<h1>Categories</h1>

<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
	</thead>
	<tbody>
		{#each data.resource as { CategoryId, CategoryName }}
			<tr>
				<th scope="row"><a href="/categories/{CategoryId}">{CategoryId}</a> </th>
				<td>{CategoryName}</td>
			</tr>
		{/each}
	</tbody>
</table>
