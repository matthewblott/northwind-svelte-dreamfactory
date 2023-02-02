<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { Save, Delete } from 'lucide-svelte'
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

	const handleDelete = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const territoryIdElement: any = form.querySelector('#TerritoryId')
		const territoryIdElementValue = territoryIdElement.value
		const territoryId = parseInt(territoryIdElementValue)

		api.remove(employeeId, territoryId)

		goto(`/employees/${employeeId}/territories`)
	}
</script>

<h1>Employee Territory</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" role="button" disabled><Save /> Save</a>
	<a href="#" on:click|preventDefault={handleDelete} role="button"><Delete /> Delete </a>
	<fieldset>
		<label for="TerritoryId">Territory Id</label>
		<input id="TerritoryId" name="TerritoryId" type="number" readonly />
		<label for="TerritoryDescription">Territory</label>
		<input id="TerritoryDescription" name="TerritoryDescription" readonly />
	</fieldset>
</form>
