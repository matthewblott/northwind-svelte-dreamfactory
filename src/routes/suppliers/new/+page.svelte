<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Supplier as api } from '$lib/data/supplier'
	import { SupplierSchema } from '$lib/schema/supplier'
	import type { Supplier } from '$lib/schema/supplier'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'
	import SupplierRegions from '$lib/components/SupplierRegions.svelte'

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
		e.preventDefault()
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
	<a href="#" on:click={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="SupplierId">Id</label>
		<input id="SupplierId" value="[New]" readonly />
		<input type="number" name="SupplierId" value="0" style="display: none;" />

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

		<SupplierRegions />

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
