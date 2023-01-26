<script lang="ts">
	import { createForm } from 'felte'
	import { ValidationMessage, reporter } from '@felte/reporter-svelte'
	import { validateSchema } from '@felte/validator-zod'
	import { Save } from 'lucide-svelte'
	import { Shipper as api } from '$lib/data/shipper'
	import { ShipperSchema } from '$lib/schema/shipper'
	import type { Shipper } from '$lib/schema/shipper'
	import { goto } from '$app/navigation'

	const { form } = createForm<Shipper>({
		async onSubmit(values) {
			delete values.ShipperId

			const id = await api.create(values)
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
</script>

<h1>Shipper</h1>

<form use:form>
	<fieldset>
		<label for="ShipperId">Id</label>
		<input id="ShipperId" value="[New]" readonly />
		<input type="number" name="ShipperId" value="0" style="display: none;" />
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
	<button type="submit" style="display: none;" />
	<button type="reset" style="display: none;" />
	<a href="#" on:click={handleClick} role="button"><Save /> Save</a>
</form>
