<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { OrderDetails as api } from '$lib/data/order-details'
	import { OrderDetailsSchema } from '$lib/schema/order-details'
	import type { OrderDetails } from '$lib/schema/order-details'
	import { goto } from '$app/navigation'
	import NumberField from '$lib/components/NumberField.svelte'
	import { page } from '$app/stores'
	import Products from '$lib/components/Products.svelte'

	const { form } = createForm<OrderDetails>({
		initialValues: {
			OrderId: parseInt($page.params.id)
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
</script>

<h1>Order Item</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="OrderId">Order Id</label>
		<input id="OrderId" name="OrderId" type="number" readonly />
		<!-- <label for="ProductId">Product Id</label> -->
		<!-- <input id="ProductId" name="ProductId" type="number" /> -->
		<Products name="ProductId" />
		<NumberField name="UnitPrice" />
		<NumberField name="Quantity" />
		<NumberField name="Discount" />
	</fieldset>
</form>
