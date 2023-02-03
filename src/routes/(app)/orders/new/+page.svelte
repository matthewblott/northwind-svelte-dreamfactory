<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Order as api } from '$lib/data/order'
	import { OrderSchema } from '$lib/schema/order'
	import type { Order } from '$lib/schema/order'
	import { goto } from '$app/navigation'
	import DateField from '$lib/components/DateField.svelte'
	import Customers from '$lib/components/Customers.svelte'
	import Shippers from '$lib/components/Shippers.svelte'
	import TextField from '$lib/components/TextField.svelte'
	import OrderRegions from '$lib/components/OrderRegions.svelte'
	import NumberField from '$lib/components/NumberField.svelte'
	import Employees from '$lib/components/Employees.svelte'

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

	const cancel = () => {
		goto('/orders')
	}
</script>

<h1>Order</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="OrderId">Id</label>
		<input id="OrderId" value="[New]" readonly />
		<input type="number" name="OrderId" value="0" style="display: none;" />

		<Customers name="CustomerId" />

		<Employees name="EmployeeId" />

		<DateField name="OrderDate" />
		<DateField name="RequiredDate" />
		<DateField name="ShippedDate" />
		<Shippers name="ShipVia" />
		<NumberField name="Freight" />
		<TextField name="ShipName" />
		<TextField name="ShipAddress" />
		<TextField name="ShipCity" />
		<OrderRegions name="ShipRegion" />
		<TextField name="ShipPostalCode" />
		<TextField name="ShipCountry" />
	</fieldset>
</form>
