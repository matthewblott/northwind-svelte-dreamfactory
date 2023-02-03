<script lang="ts">
	export let data: any

	import { Save, Delete, XSquare } from 'lucide-svelte'
	import { Category as schema } from '$lib/schema/category'
	import { Category as api } from '$lib/data/category'
	import { goto } from '$app/navigation'

	const save = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')

		// Clear previous errors
		const errors = form.querySelectorAll('.error')
		const fieldSet: any = form.querySelector('fieldset')

		errors.forEach((error) => {
			fieldSet.removeChild(error)
		})

		const formData = new FormData(form)
		const jsonObject = Object.fromEntries(formData)
		const results: any = schema.safeParse(jsonObject)

		if (results.success) {
			api.update(jsonObject)
			goto('/categories')
		}

		const issues = results.error.issues

		issues.forEach((issue: any) => {
			const el: any = form.querySelector(`#${issue.path[0]}`)
			const span = document.createElement('span')

			span.className = 'error'
			span.innerText = issue.message

			el.after(span)
		})
	}

	const remove = (e: any) => {
		const target = e.target
		const form: HTMLFormElement = target.closest('form')
		const idElement: any = form.querySelector('#CategoryId')
		const value = idElement.value
		const id = parseInt(value)

		api.remove(id)

		goto('/categories')
	}

	const cancel = () => {
		goto('/categories')
	}
</script>

<h1>Category</h1>
<form>
	<button on:click|preventDefault={save}><Save /> Save</button>
	<button on:click|preventDefault={remove}><Delete /> Delete</button>
	<button on:click|preventDefault={cancel}><XSquare /> Cancel</button>
	<div class="filler" />
	<fieldset>
		<label for="CategoryId">Id</label>
		<input id="CategoryId" name="CategoryId" value={data.CategoryId} readonly />
		<label for="CategoryName">Name</label>
		<input id="CategoryName" name="CategoryName" value={data.CategoryName} />
		<label for="Description">Description</label>
		<input id="Description" name="Description" value={data.Description} /><br />
	</fieldset>
</form>
