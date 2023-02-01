<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete } from 'lucide-svelte'
	import { OrderDetails as api } from '$lib/data/order-details'
	import { OrderDetailsSchema } from '$lib/schema/order-details'
	import type { OrderDetails } from '$lib/schema/order-details'
	import { goto } from '$app/navigation'
	import NumberField from '$lib/components/NumberField.svelte'
	import TextField from '$lib/components/TextField.svelte'

	const { form } = createForm<OrderDetails>({
		initialValues: data.resource[0],
		async onSubmit(values) {
			const orderId = values.OrderId
			const productId = values.ProductId
			await api.update(values)

			const url = `/orders/${orderId}/items/${productId}`
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

	const handleDelete = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const orderIdElement: any = form.querySelector('#OrderId')
		const orderIdElementValue = orderIdElement.value
		const orderId = parseInt(orderIdElementValue)
		const productIdElement: any = form.querySelector('#ProductId')
		const productIdElementValue = productIdElement.value
		const productId = parseInt(productIdElementValue)

		api.remove(orderId, productId)

		goto(`/orders/${orderId}/items`)
	}
</script>

<h1>Order Item</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<a href="#" on:click|preventDefault={handleDelete} role="button"><Delete /> Delete </a>
	<fieldset>
		<label for="OrderId">Order Id</label>
		<input id="OrderId" name="OrderId" readonly />
		<input id="ProductId" name="ProductId" type="hidden" />

		<TextField name="ProductName" />
		<NumberField name="UnitPrice" />
		<NumberField name="Quantity" />
		<NumberField name="Discount" />
	</fieldset>
</form>
