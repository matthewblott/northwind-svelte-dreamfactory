<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete } from 'lucide-svelte'
	import { Order as api } from '$lib/data/order'
	import { OrderSchema } from '$lib/schema/order'
	import type { Order } from '$lib/schema/order'
	import { goto } from '$app/navigation'
	import DateField from '$lib/components/DateField.svelte'

	const { form } = createForm<Order>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/orders/${id}`
			goto(url)
		},
		validate: validateSchema(OrderSchema),
		extend: [reporter]
	})

	let orderDate = getValue(data, 'OrderDate').substring(0, 10)

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}

	const handleDelete = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#OrderId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/orders')
	}
</script>

<h1>Order</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<a href="#" on:click|preventDefault={handleDelete} role="button"><Delete /> Delete </a>
	<fieldset>
		<label for="OrderId">Id</label>
		<input id="OrderId" name="OrderId" readonly />

		<DateField name="OrderDate" value={orderDate} />
	</fieldset>
</form>
