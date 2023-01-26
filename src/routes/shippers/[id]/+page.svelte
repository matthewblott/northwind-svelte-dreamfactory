<script lang="ts">
	export let data: any
	import { createForm } from 'felte'
	import { ValidationMessage, reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save, Delete } from 'lucide-svelte'
	import { Shipper as api } from '$lib/data/shipper'
	import { ShipperSchema } from '$lib/schema/shipper'
	import type { Shipper } from '$lib/schema/shipper'
	import { goto } from '$app/navigation'

	let submitted: Shipper | undefined

	const { form } = createForm<Shipper>({
		initialValues: data,
		async onSubmit(values) {
			submitted = values
			const id = await api.update(values)
			const url = `/shippers/${id}`
			goto(url)
		},
		validate: validateSchema(ShipperSchema),
		extend: [reporter]
	})

	const handleClick = (e: any) => {
		e.preventDefault()
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const button: any = form.querySelector('button[type="submit"]')
		button.click()
	}

	const handleDelete = (e: any) => {
		e.preventDefault()

		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#ShipperId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/shippers')
	}
</script>

<h1>Shipper</h1>

<form use:form>
	<fieldset>
		<label for="ShipperId">Id</label>
		<input id="ShipperId" type="number" name="ShipperId" value="1234" readonly />
		<label for="CompanyName">Name</label>
		<input id="CompanyName" name="CompanyName" />
		<ValidationMessage for="CompanyName" let:messages>
			<ul aria-live="polite">
				{#each messages ?? [] as message}
					<li>{message}</li>
				{/each}
			</ul>
		</ValidationMessage>

		<label for="Phone">Phone</label>
		<input id="Phone" name="Phone" /><br />

		<ValidationMessage for="Phone" let:messages>
			<ul aria-live="polite">
				{#each messages ?? [] as message}
					<li>{message}</li>
				{/each}
			</ul>
		</ValidationMessage>
	</fieldset>
	<button type="submit" class="hidden" />
	<button type="reset" class="hidden" />
	<a href="#" on:click={handleClick} role="button"><Save /> Save</a>
	<a href="#" on:click={handleDelete} role="button"><Delete /> Delete </a>
</form>
