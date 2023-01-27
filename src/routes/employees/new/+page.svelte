<script lang="ts">
	import { createForm } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Employee as api } from '$lib/data/employee'
	import { EmployeeSchema } from '$lib/schema/employee'
	import type { Employee } from '$lib/schema/employee'
	import { goto } from '$app/navigation'
	import TextField from '$lib/components/TextField.svelte'
	import DateField from '$lib/components/DateField.svelte'
	import EmployeeRegions from '$lib/components/EmployeeRegions.svelte'
	import Employees from '$lib/components/Employees.svelte'

	const { form } = createForm<Employee>({
		async onSubmit(values) {
			delete values.EmployeeId

			const id = await api.create(values)
			const url = `/employees/${id}`
			goto(url)
		},
		validate: validateSchema(EmployeeSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}
</script>

<h1>Employee</h1>

<form use:form>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click|preventDefault={handleClick} role="button"><Save /> Save</a>
	<fieldset>
		<label for="EmployeeId">Id</label>
		<input id="EmployeeId" value="[New]" readonly />
		<input type="number" name="EmployeeId" value="0" style="display: none;" />

		<TextField name="Title" />
		<TextField name="TitleOfCourtesy" />

		<DateField name="BirthDate" />

		<TextField name="FirstName" />
		<TextField name="LastName" />

		<DateField name="HireDate" />

		<TextField name="Address" />
		<TextField name="City" />
		<EmployeeRegions name="Region" />
		<TextField name="PostalCode" />
		<TextField name="Country" />
		<TextField name="HomePhone" />
		<TextField name="Extension" />
		<TextField name="Photo" />
		<TextField name="Notes" />

		<Employees name="ReportsTo" />

		<TextField name="PhotoPath" />
	</fieldset>
</form>
