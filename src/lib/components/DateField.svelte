<script lang="ts">
	import Validation from '$lib/components/Validation.svelte'
	import { capitalCase } from 'change-case'

	export let name = ''
	export let value = new Date().toJSON().slice(0, 10)

	const caption = () => {
		return capitalCase(name)
	}

	const fix = (e: any) => {
		value = e.target.value || value
	}
</script>

<label for={name}>{caption()}</label>
<input type="date" {value} on:input={fix} />
<Validation {name} />
