<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { OrderDetails as api } from '$lib/data/order-details'
	import { OrderDetailsSchema } from '$lib/schema/order-details'
	import type { OrderDetails } from '$lib/schema/order-details'
	import { goto } from '$app/navigation'
	import NumberField from '$lib/components/NumberField.svelte'
	import { page } from '$app/stores'
	import Products from '$lib/components/Products.svelte'
	const orderId = parseInt($page.params.id)
	const { form } = createForm<OrderDetails>({
		initialValues: {
			OrderId: orderId
		},
		async onSubmit(values) {
			await api.create(values)
			const productId = values.ProductId
			const url = `/orders/${$page.params.id}/items/${productId}`
			goto(url)
		},
		validate: validateSchema(OrderDetailsSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
	const cancel = () => {
		goto(`/orders/${orderId}/items`)
	}
</script>

<h1>Order Item</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<fieldset>
		<label for="OrderId">Order Id</label>
		<input id="OrderId" name="OrderId" type="number" readonly />
		<Products name="ProductId" />
		<NumberField name="UnitPrice" />
		<NumberField name="Quantity" />
		<NumberField name="Discount" />
	</fieldset>
</form>
