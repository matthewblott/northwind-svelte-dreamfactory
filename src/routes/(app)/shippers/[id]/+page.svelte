<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import Validation from '$lib/components/Validation.svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Shipper as api } from '$lib/data/shipper'
	import { ShipperSchema } from '$lib/schema/shipper'
	import type { Shipper } from '$lib/schema/shipper'
	import { goto } from '$app/navigation'

	const { form } = createForm<Shipper>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/shippers/${id}`
			goto(url)
		},
		validate: validateSchema(ShipperSchema),
		extend: [reporter]
	})

	const remove = (e: any) => {
		e.preventDefault()

		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#ShipperId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/shippers')
	}
	const cancel = () => {
		goto('/shippers')
	}
</script>

<h1>Shipper</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="ShipperId">Id</label>
		<input id="ShipperId" type="number" name="ShipperId" readonly />
		<label for="CompanyName">Name</label>
		<input id="CompanyName" name="CompanyName" />
		<Validation name="CompanyName" />

		<label for="Phone">Phone</label>
		<input id="Phone" name="Phone" /><br />
		<Validation name="Phone" />
	</fieldset>
</form>
