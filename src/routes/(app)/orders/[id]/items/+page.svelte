<script lang="ts">
	import { onMount } from 'svelte'
	import { Edit, PlusSquare, XSquare } from 'lucide-svelte'
	import { fetchData } from './store'
	import { goto } from '$app/navigation'
	import Pager from '$lib/components/Pager.svelte'
	import { page } from '$app/stores'

	$: items = []
	$: count = 0

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const orderId = parseInt(paths[1])

	const next = (args: any) => {
		const offset = args.detail.offset
		update(offset)
	}

	const update = async (offset = 0) => {
		const pathname = $page.url.pathname
		const limit = 10
		const data = await fetchData(limit, offset, orderId)
		const url = `${pathname}?limit=${limit}&offset=${offset}`

		goto(url)

		count = data.meta.count
		items = data.resource
	}
	const cancel = () => {
		goto(`/orders/${orderId}`)
	}
	onMount(() => {
		update()
	})
</script>

<h1>Order Items</h1>

<Pager limit={10} {count} on:next={next} />
<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
<table role="grid">
	<thead>
		<th scope="col">Product Id</th>
		<th scope="col">Product Name </th>
		<th>
			<a href="/orders/{orderId}/items/new"><PlusSquare /></a>
		</th>
	</thead>
	<tbody>
		{#each items as { OrderId, ProductId, ProductName }}
			<tr>
				<th scope="row">
					{ProductId}
				</th>
				<td>{ProductName}</td>
				<td>
					<a href="/orders/{OrderId}/items/{ProductId}"><Edit /></a>
				</td>
			</tr>
		{/each}
	</tbody>
</table>
