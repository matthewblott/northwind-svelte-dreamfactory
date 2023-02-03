<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Product as api } from '$lib/data/product'
	import { ProductSchema } from '$lib/schema/product'
	import type { Product } from '$lib/schema/product'
	import { goto } from '$app/navigation'
	import Categories from '$lib/components/Categories.svelte'
	import Suppliers from '$lib/components/Suppliers.svelte'
	import NumberField from '$lib/components/NumberField.svelte'
	import TextField from '$lib/components/TextField.svelte'
	import CheckboxField from '$lib/components/CheckboxField.svelte'

	const { form } = createForm<Product>({
		async onSubmit(values) {
			delete values.ProductId

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

	const cancel = () => {
		goto('/products')
	}
</script>

<h1>Product</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="ProductId">Id</label>
		<input id="ProductId" value="[New]" readonly />
		<input type="number" name="ProductId" value="0" style="display: none;" />
		<TextField name="ProductName" />
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
