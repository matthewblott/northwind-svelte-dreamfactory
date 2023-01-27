<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete } from 'lucide-svelte'
	import { Product as api } from '$lib/data/product'
	import { ProductSchema } from '$lib/schema/product'
	import type { Product } from '$lib/schema/product'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'

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

	let regionId: number = getValue(data, 'RegionId')

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}

	const handleDelete = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#ProductId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/products')
	}
</script>

<h1>Product</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<a href="#" on:click|preventDefault={handleDelete} role="button"><Delete /> Delete </a>
	<fieldset>
		<label for="ProductId">Id</label>
		<input id="ProductId" name="ProductId" readonly />
		<label for="ProductDescription">Description</label>
		<input id="ProductDescription" name="ProductName" />
		<Validation name="ProductName" />
	</fieldset>
</form>
