<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Product as api } from '$lib/data/product'
	import { ProductSchema } from '$lib/schema/product'
	import type { Product } from '$lib/schema/product'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'
	import Categories from '$lib/components/Categories.svelte'
	import Suppliers from '$lib/components/Suppliers.svelte'
	import NumberField from '$lib/components/NumberField.svelte'
	import TextField from '$lib/components/TextField.svelte'
	import CheckboxField from '$lib/components/CheckboxField.svelte'

	const { form } = createForm<Product>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/products/${id}`
			goto(url)
		},
		validate: validateSchema(ProductSchema),
		extend: [reporter]
	})

	let categoryId: number = getValue(data, 'CategoryId')
	let supplierId: number = getValue(data, 'SupplierId')
	let discontinued: boolean = Boolean(getValue(data, 'Discontinued'))

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#ProductId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/products')
	}
	const cancel = () => {
		goto('/products')
	}
</script>

<h1>Product</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="ProductId">Id</label>
		<input id="ProductId" name="ProductId" readonly />
		<label for="ProductDescription">Description</label>
		<input id="ProductDescription" name="ProductName" />
		<Validation name="ProductName" />
		<Categories name="CategoryId" value={categoryId} />
		<Suppliers name="SupplierId" value={supplierId} />
		<TextField name="QuantityPerUnit" />
		<NumberField name="UnitPrice" />
		<NumberField name="UnitsInStock" />
		<NumberField name="UnitsOnOrder" />
		<NumberField name="ReorderLevel" />
		<CheckboxField name="Discontinued" checked={discontinued} />
	</fieldset>
</form>
