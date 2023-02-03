<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Territory as api } from '$lib/data/territory'
	import { TerritorySchema } from '$lib/schema/territory'
	import type { Territory } from '$lib/schema/territory'
	import { goto } from '$app/navigation'
	import Regions from '$lib/components/Regions.svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Territory>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/territories/${id}`
			goto(url)
		},
		validate: validateSchema(TerritorySchema),
		extend: [reporter]
	})

	let regionId: number = getValue(data, 'RegionId')

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#TerritoryId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/territories')
	}
	const cancel = () => {
		goto('/territories')
	}
</script>

<h1>Territory</h1>

<form use:form>
	<button><Save /> Save</button>
	<button on:click|preventDefault={remove}><Delete /> Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="TerritoryId">Id</label>
		<input id="TerritoryId" name="TerritoryId" readonly />
		<label for="TerritoryDescription">Description</label>
		<input id="TerritoryDescription" name="TerritoryDescription" />
		<Validation name="TerritoryDescription" />

		<Regions value={regionId} name="RegionId" />
	</fieldset>
</form>
