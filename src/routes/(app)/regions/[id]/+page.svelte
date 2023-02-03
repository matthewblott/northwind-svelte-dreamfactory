<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import Validation from '$lib/components/Validation.svelte'
	import { goto } from '$app/navigation'

	const { form } = createForm<Region>({
		initialValues: data
	})
	const cancel = () => {
		goto('/regions')
	}
</script>

<h1>Region</h1>

<form use:form>
	<button disabled><Save />Save</button>
	<button disabled><Delete />Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="RegionId">Id</label>
		<input id="RegionId" type="number" name="RegionId" readonly />
		<Validation name="RegionId" />
		<label for="RegionDescription">Description</label>
		<input id="RegionDescription" name="RegionDescription" />
		<Validation name="RegionDescription" />
	</fieldset>
</form>
