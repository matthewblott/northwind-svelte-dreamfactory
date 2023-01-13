<script lang="ts">
	export let data: any

	import { Save, Delete } from 'lucide-svelte'
	// import { Shipper } from '$lib/schema/shipper'
	// import { Shippers} from '$lib/rest'
	// import { goto } from '$app/navigation'

	const handleUpdate = (e: any) => {
		e.preventDefault()
		//
		// 	const target = e.target
		// 	const form: HTMLFormElement = target.closest('form')
		//
		// 	// Clear previous errors
		// 	const errors = form.querySelectorAll('.error')
		// 	const fieldSet: any = form.querySelector('fieldset')
		//
		// 	errors.forEach((error) => {
		// 		fieldSet.removeChild(error)
		// 	})
		//
		// 	const formData = new FormData(form)
		// 	const jsonObject = Object.fromEntries(formData)
		// 	const results: any = ShipperSchema.safeParse(jsonObject)
		//
		// 	if (results.success) {
		// 		Categories.update(jsonObject)
		// 		goto('/categories')
		// 	}
		//
		// 	const issues = results.error.issues
		//
		// 	issues.forEach((issue: any) => {
		// 		const el: any = form.querySelector(`#${issue.path[0]}`)
		// 		const span = document.createElement('span')
		//
		// 		span.className = 'error'
		// 		span.innerText = issue.message
		//
		// 		el.after(span)
		// 	})
	}

	const handleDelete = (e: any) => {
		e.preventDefault()

		// const target = e.target
		// const form: HTMLFormElement = target.closest('form')
		// const idElement: any = form.querySelector('#ShipperId')
		// const value = idElement.value
		// const id = parseInt(value)
		//
		// Categories.remove(id)
		//
		// goto('/categories')
	}
</script>

<h1>Shipper</h1>

<form>
	<fieldset>
		<label for="ShipperId">Id</label>
		<input id="ShipperId" name="ShipperId" value={data.ShipperId} readonly />
		<label for="CompanyName">Company Name</label>
		<input id="CompanyName" name="CompanyName" value={data.CompanyName} />
		<label for="Phone">Phone</label>
		<input id="Phone" name="Phone" value={data.Phone} /><br />
		<a href="#" on:click={handleUpdate} role="button"><Save /> Save</a>
		<a href="#" on:click={handleDelete} role="button"><Delete /> Delete </a>
	</fieldset>
</form>
