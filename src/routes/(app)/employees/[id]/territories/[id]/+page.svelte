<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { EmployeeTerritory as api } from '$lib/data/employee-territory'
	import type { EmployeeTerritory } from '$lib/schema/employee-territory'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const employeeId = parseInt(paths[1])

	const { form } = createForm<EmployeeTerritory>({
		initialValues: data
	})

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const territoryIdElement: any = form.querySelector('#TerritoryId')
		const territoryIdElementValue = territoryIdElement.value
		const territoryId = parseInt(territoryIdElementValue)

		api.remove(employeeId, territoryId)

		goto(`/employees/${employeeId}/territories`)
	}
	const cancel = () => {
		goto(`/employees/${employeeId}/territories`)
	}
</script>

<h1>Employee Territory</h1>

<form use:form>
	<button disabled><Save /> Save</button>
	<button on:click|preventDefault={remove}><Delete /> Delete </button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="TerritoryId">Id</label>
		<input id="TerritoryId" name="TerritoryId" type="number" readonly />
		<label for="TerritoryDescription">Description</label>
		<input id="TerritoryDescription" name="TerritoryDescription" readonly />
	</fieldset>
</form>
