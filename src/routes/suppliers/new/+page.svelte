<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Supplier as api } from '$lib/data/supplier'
	import { SupplierSchema } from '$lib/schema/supplier'
	import type { Supplier } from '$lib/schema/supplier'
	import { goto } from '$app/navigation'
	import SupplierRegions from '$lib/components/SupplierRegions.svelte'
	import TextField from '$lib/components/TextField.svelte'

	const { form } = createForm<Supplier>({
		async onSubmit(values) {
			delete values.SupplierId

			const id = await api.create(values)
			const url = `/suppliers/${id}`
			goto(url)
		},
		validate: validateSchema(SupplierSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
</script>

<h1>Supplier</h1>

<form use:form>
	<button type="submit" style="display: none;" />
	<button type="reset" style="display: none;" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="SupplierId">Id</label>
		<input id="SupplierId" value="[New]" readonly />
		<input type="number" name="SupplierId" value="0" style="display: none;" />

		<TextField name="CompanyName" />
		<TextField name="ContactName" />
		<TextField name="ContactTitle" />
		<TextField name="Address" />
		<TextField name="City" />
		<SupplierRegions name="Region" />
		<TextField name="PostalCode" />
		<TextField name="Country" />
		<TextField name="Phone" />
		<TextField name="Fax" />
		<TextField name="HomePage" />
	</fieldset>
</form>
