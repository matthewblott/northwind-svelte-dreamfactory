<script lang="ts">
	import Territories from '$lib/components/Territories.svelte'
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, XSquare } from 'lucide-svelte'
	import { EmployeeTerritory as api } from '$lib/data/employee-territory'
	import { EmployeeTerritorySchema } from '$lib/schema/employee-territory'
	import type { EmployeeTerritory } from '$lib/schema/employee-territory'
	import { goto } from '$app/navigation'
	import { page } from '$app/stores'

	const pathname = $page.url.pathname
	const paths = pathname.split('/').filter((item) => item !== '')
	const employeeId = parseInt(paths[1])

	const { form } = createForm<EmployeeTerritory>({
		async onSubmit(values) {
			const id = await api.create(values)
			const url = `/employees/${employeeId}/territories/${id}`
			goto(url)
		},
		validate: validateSchema(EmployeeTerritorySchema),
		extend: [reporter]
	})
	const cancel = () => {
		goto(`/employees/${employeeId}/territories`)
	}
</script>

<h1>Employee Territory</h1>

<form use:form>
	<button><Save /> Save</button>
	<button on:click|preventDefault={cancel}><XSquare />Cancel</button>
	<div class="filler" />
	<fieldset>
		<input id="EmployeeId" name="EmployeeId" type="number" value={employeeId} class="hidden" />
		<Territories name="TerritoryId" />
	</fieldset>
</form>
