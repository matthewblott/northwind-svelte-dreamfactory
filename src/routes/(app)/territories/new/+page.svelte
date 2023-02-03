<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { Territory as api } from '$lib/data/territory'
	import { TerritorySchema } from '$lib/schema/territory'
	import type { Territory } from '$lib/schema/territory'
	import { goto } from '$app/navigation'
	import Regions from '$lib/components/Regions.svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Territory>({
		async onSubmit(values) {
			delete values.TerritoryId

			const id = await api.create(values)
			const url = `/territories/${id}`
			goto(url)
		},
		validate: validateSchema(TerritorySchema),
		extend: [reporter]
	})

	const cancel = () => {
		goto('/territories')
	}
</script>

<h1>Territory</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="TerritoryId">Id</label>
		<input id="TerritoryId" value="[New]" readonly />
		<input type="number" name="TerritoryId" value="0" style="display: none;" />
		<label for="TerritoryDescription">Description</label>
		<input id="TerritoryDescription" name="TerritoryDescription" />
		<Validation name="TerritoryDescription" />

		<Regions name="RegionId" />
		<Validation name="RegionId" />
	</fieldset>
</form>
