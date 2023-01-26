<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete } from 'lucide-svelte'
	import { Territory as api } from '$lib/data/territory'
	import { TerritorySchema } from '$lib/schema/territory'
	import type { Territory } from '$lib/schema/territory'
	import { goto } from '$app/navigation'
	import Regions from '$lib/components/Regions.svelte'
	import Validation from '$lib/components/Validation.svelte'

	let submitted: Territory | undefined
	let regionId: number

	const { form } = createForm<Territory>({
		initialValues: data,
		async onSubmit(values) {
			submitted = values
			const id = await api.update(values)
			const url = `/territories/${id}`
			goto(url)
		},
		validate: validateSchema(TerritorySchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}

	const handleDelete = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#TerritoryId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/territories')
	}
</script>

<h1>Territory</h1>

<form use:form>
	<fieldset>
		<label for="TerritoryId">Id</label>
		<input id="TerritoryId" name="TerritoryId" value="1234" readonly />
		<label for="TerritoryDescription">Description</label>
		<input id="TerritoryDescription" name="TerritoryDescription" />
		<Validation name="TerritoryDescription" />

		<Regions {regionId} />
	</fieldset>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<a href="#" on:click|preventDefault={handleDelete} role="button"><Delete /> Delete </a>
</form>
