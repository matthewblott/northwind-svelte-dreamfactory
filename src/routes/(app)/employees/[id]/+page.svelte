<script lang="ts">
	export let data: any
	import { createForm, getValue } from 'felte'
	import { reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete, Edit, XSquare } from 'lucide-svelte'
	import { Employee as api } from '$lib/data/employee'
	import { EmployeeSchema } from '$lib/schema/employee'
	import type { Employee } from '$lib/schema/employee'
	import { goto } from '$app/navigation'
	import TextField from '$lib/components/TextField.svelte'
	import DateField from '$lib/components/DateField.svelte'
	import EmployeeRegions from '$lib/components/EmployeeRegions.svelte'
	import Employees from '$lib/components/Employees.svelte'
	import Validation from '$lib/components/Validation.svelte'

	const { form } = createForm<Employee>({
		initialValues: data,
		async onSubmit(values) {
			const id = await api.update(values)
			const url = `/employees/${id}`
			goto(url)
		},
		validate: validateSchema(EmployeeSchema),
		extend: [reporter]
	})

	let employeeId: number = getValue(data, 'ReportsTo')
	let hireDate = getValue(data, 'HireDate').substring(0, 10)
	let birthDate = getValue(data, 'BirthDate').substring(0, 10)

	const territories = () => {
		const employeeId = getValue(data, 'EmployeeId')
		goto(`/employees/${employeeId}/territories`)
	}

	const save = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#EmployeeId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/employees')
	}
	const cancel = () => {
		goto('/employees')
	}
</script>

<h1>Employee</h1>

<form use:form>
	<button><Save />Save</button>
	<button on:click|preventDefault={remove}><Delete />Delete</button>
	<button on:click|preventDefault={territories}><Edit /> Territories</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="EmployeeId">Id</label>
		<input id="EmployeeId" name="EmployeeId" readonly />

		<TextField name="Title" />
		<TextField name="TitleOfCourtesy" />

		<DateField name="BirthDate" value={birthDate} />

		<TextField name="FirstName" />
		<TextField name="LastName" />

		<DateField name="HireDate" value={hireDate} />

		<TextField name="Address" />
		<TextField name="City" />
		<EmployeeRegions name="Region" />
		<TextField name="PostalCode" />
		<TextField name="Country" />
		<TextField name="HomePhone" />
		<TextField name="Extension" />
		<TextField name="Photo" />

		<label for="Notes">Notes</label>
		<textarea name="Notes" id="Notes" rows="5" />
		<Validation name="Notes" />

		<Employees name="ReportsTo" value={employeeId} />

		<TextField name="PhotoPath" />
	</fieldset>
</form>
