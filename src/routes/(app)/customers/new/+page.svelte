<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Customer as api } from '$lib/data/customer'
	import { CustomerSchema } from '$lib/schema/customer'
	import type { Customer } from '$lib/schema/customer'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'
	import CustomerRegions from '$lib/components/CustomerRegions.svelte'

	const { form } = createForm<Customer>({
		async onSubmit(values) {
			const id = await api.create(values)
			const url = `/customers/${id}`
			goto(url)
		},
		validate: validateSchema(CustomerSchema),
		extend: [reporter]
	})

	const save = (e: any) => {
		e.preventDefault()
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
	const cancel = () => {
		goto('/customers')
	}
</script>

<h1>Customer</h1>

<form use:form>
	<button on:click|preventDefault={save}><Save /> Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="CustomerId">Id</label>
		<input id="CustomerId" name="CustomerId" maxlength="5" />
		<Validation name="CustomerId" />

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

		<CustomerRegions />

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
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
</form>
