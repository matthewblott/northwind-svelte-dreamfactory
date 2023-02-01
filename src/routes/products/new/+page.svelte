<script lang="ts">
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Product as api } from '$lib/data/product'
	import { ProductSchema } from '$lib/schema/product'
	import type { Product } from '$lib/schema/product'
	import { goto } from '$app/navigation'
	import Categories from '$lib/components/Categories.svelte'
	import Suppliers from '$lib/components/Suppliers.svelte'
	import NumberField from '$lib/components/NumberField.svelte'
	import TextField from '$lib/components/TextField.svelte'
	import CheckboxField from '$lib/components/CheckboxField.svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Product>({
		async onSubmit(values) {
			delete values.ProductId
			// delete values.Discontinued

			if (values.CategoryId === '') {
				delete values.CategoryId
			} else {
				values.CategoryId = parseInt(values.CategoryId)
			}

			if (values.SupplierId === '') {
				delete values.SupplierId
			} else {
				values.SupplierId = parseInt(values.SupplierId)
			}

			if (values.Discontinued) {
				values.Discontinued = 1
			} else {
				values.Discontinued = 0
			}

			const id = await api.create(values)
			const url = `/products/${id}`
			goto(url)
		},
		validate: validateSchema(ProductSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
</script>

<h1>Product</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="ProductId">Id</label>
		<input id="ProductId" value="[New]" readonly />
		<input type="number" name="ProductId" value="0" style="display: none;" />

		<TextField name="ProductName" />

		<!-- <NumberField name="CategoryId" /> -->
		<!-- <NumberField name="SupplierId" /> -->

		<Categories name="CategoryId" />
		<Suppliers name="SupplierId" />
		<TextField name="QuantityPerUnit" />
		<NumberField name="UnitPrice" />
		<NumberField name="UnitsInStock" />
		<NumberField name="UnitsOnOrder" />
		<NumberField name="ReorderLevel" />
		<CheckboxField name="Discontinued" />
	</fieldset>
</form>
