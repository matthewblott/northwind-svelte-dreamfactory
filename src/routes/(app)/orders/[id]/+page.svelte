<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, Edit, XSquare } from 'lucide-svelte'
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
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/orders/${id}`
			goto(url)
		},
		validate: validateSchema(OrderSchema),
		extend: [reporter]
	})

	let orderId = getValue(data, 'OrderId')
	let orderDate = getValue(data, 'OrderDate').substring(0, 10)
	let requiredDate = getValue(data, 'RequiredDate').substring(0, 10)
	let shippedDate = getValue(data, 'ShippedDate').substring(0, 10)
	let customerId = getValue(data, 'CustomerId')
	let shipperId = getValue(data, 'ShipVia')
	let shipRegion = getValue(data, 'ShipRegion')
	let employeeId = getValue(data, 'EmployeeId')

	const items = () => {
		goto(`/orders/${orderId}/items`)
	}

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#OrderId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/orders')
	}
	const cancel = () => {
		goto('/orders')
	}
</script>

<h1>Order</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={items}><Edit /> Items</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="OrderId">Id</label>
		<input id="OrderId" name="OrderId" readonly />
		<Customers name="CustomerId" value={customerId} />
		<Employees name="EmployeeId" value={employeeId} />
		<DateField name="OrderDate" value={orderDate} />
		<DateField name="RequiredDate" value={requiredDate} />
		<DateField name="shippedDate" value={shippedDate} />
		<Shippers name="ShipVia" value={shipperId} />
		<NumberField name="Freight" />
		<TextField name="ShipAddress" />
		<TextField name="ShipCity" />
		<OrderRegions name="ShipRegion" value={shipRegion} />
		<TextField name="ShipPostalCode" />
		<TextField name="ShipCountry" />
	</fieldset>
</form>
