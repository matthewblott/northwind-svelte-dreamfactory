<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
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

	const cancel = () => {
		goto('/suppliers')
	}
</script>

<h1>Supplier</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
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
