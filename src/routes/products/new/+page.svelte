<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Product as api } from '$lib/data/product'
	import { ProductSchema } from '$lib/schema/product'
	import type { Product } from '$lib/schema/product'
	import { goto } from '$app/navigation'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Product>({
		async onSubmit(values) {
			delete values.ProductId

			const id = await api.create(values)
			const url = `/products/${id}`
			goto(url)
		},
		validate: validateSchema(ProductSchema),
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

<h1>Product</h1>

<form use:form>
	<button type="submit" style="display: none;" />
	<button type="reset" style="display: none;" />
	<a href="#" on:click={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="ProductId">Id</label>
		<input id="ProductId" name="ProductId" readonly />
		<label for="ProductDescription">Description</label>
		<input id="ProductDescription" name="ProductName" />
		<Validation name="ProductName" />
	</fieldset>
</form>
