<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Order as api } from '$lib/data/order'
	import { OrderSchema } from '$lib/schema/order'
	import type { Order } from '$lib/schema/order'
	import { goto } from '$app/navigation'
	import DateField from '$lib/components/DateField.svelte'

	const { form } = createForm<Order>({
		async onSubmit(values) {
			delete values.OrderId

			const id = await api.create(values)
			const url = `/orders/${id}`
			goto(url)
		},
		validate: validateSchema(OrderSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		e.preventDefault()
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
</script>

<h1>Order</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="OrderId">Id</label>
		<input id="OrderId" value="[New]" readonly />

		<DateField name="OrderDate" />
	</fieldset>
</form>
