<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { Save, Delete } from 'lucide-svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Region>({
		initialValues: data
	})
</script>

<h1>Region</h1>

<form use:form>
	<a href="#" role="button" disabled><Save /> Save</a>
	<a href="#" role="button" disabled><Delete /> Delete </a>
	<fieldset>
		<label for="RegionId">Id</label>
		<input id="RegionId" type="number" name="RegionId" readonly />
		<Validation name="RegionId" />
		<label for="RegionDescription">Description</label>
		<input id="RegionDescription" name="RegionDescription" />
		<Validation name="RegionDescription" />
	</fieldset>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
</form>
