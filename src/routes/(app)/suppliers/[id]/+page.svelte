<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Supplier as api } from '$lib/data/supplier'
	import { SupplierSchema } from '$lib/schema/supplier'
	import type { Supplier } from '$lib/schema/supplier'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'
	import SupplierRegions from '$lib/components/SupplierRegions.svelte'

	const { form } = createForm<Supplier>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/suppliers/${id}`
			goto(url)
		},
		validate: validateSchema(SupplierSchema),
		extend: [reporter]
	})

	let region = getValue(data, 'Region')

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#SupplierId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/suppliers')
	}
	const cancel = () => {
		goto('/suppliers')
	}
</script>

<h1>Supplier</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="SupplierId">Id</label>
		<input id="SupplierId" name="SupplierId" readonly />

		<label for="CompanyName">Name</label>
		<input id="CompanyName" name="CompanyName" />
		<Validation name="CompanyName" />

		<label for="ContactName">Contact</label>
		<input id="ContactName" name="ContactName" /><br />
		<Validation name="ContactName" />

		<label for="ContactTitle">Contact Title</label>
		<input id="ContactTitle" name="ContactTitle" /><br />
		<Validation name="ContactTitle" />

		<label for="Address">Address</label>
		<input id="Address" name="Address" /><br />
		<Validation name="Address" />

		<label for="City">City</label>
		<input id="City" name="City" /><br />
		<Validation name="City" />

		<SupplierRegions value={region} />

		<label for="PostalCode">Postal Code</label>
		<input id="PostalCode" name="PostalCode" /><br />
		<Validation name="PostalCode" />

		<label for="Country">Country</label>
		<input id="Country" name="Country" /><br />
		<Validation name="Country" />

		<label for="Phone">Phone</label>
		<input id="Phone" name="Phone" /><br />
		<Validation name="Phone" />

		<label for="Fax">Fax</label>
		<input id="Fax" name="Fax" /><br />
		<Validation name="Fax" />
	</fieldset>
</form>
