<script lang="ts">
	import { onMount } from 'svelte'
	import { Edit, PlusSquare } from 'lucide-svelte'
	import Pager from '$lib/components/Pager.svelte'

	export let data: any
	let message: string = 'Categories'

	onMount(async () => {
		const meta = data.meta
	})
</script>

<h1>
	{message}
</h1>
<Pager />

<table role="grid">
	<thead>
		<th scope="col"> Id </th>
		<th scope="col">Name</th>
		<th>
			<a href="/categories/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each data.resource as { CategoryId, CategoryName }}
			<tr>
				<th scope="row">
					{CategoryId}
				</th>
				<td>{CategoryName}</td>
				<td>
					<a href="/categories/{CategoryId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
