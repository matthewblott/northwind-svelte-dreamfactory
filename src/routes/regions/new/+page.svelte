<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Region as api } from '$lib/data/region'
	import { RegionSchema } from '$lib/schema/region'
	import type { Region } from '$lib/schema/region'
	import { goto } from '$app/navigation'
	import Regions from '$lib/components/Regions.svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Region>({
		async onSubmit(values) {
			delete values.RegionId

			const id = await api.create(values)
			const url = `/regions/${id}`
			goto(url)
		},
		validate: validateSchema(RegionSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
</script>

<h1>Region</h1>

<form use:form>
	<button type="submit" style="display: none;" />
	<button type="reset" style="display: none;" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="RegionId">Id</label>
		<input id="RegionId" value="[New]" readonly />
		<input type="number" name="RegionId" value="0" style="display: none;" />
		<label for="RegionDescription">Description</label>
		<input id="RegionDescription" name="RegionDescription" />
		<Validation name="RegionDescription" />

		<Regions name="RegionId" />
		<Validation name="RegionId" />
	</fieldset>
</form>
