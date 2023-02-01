<script lang="ts">
	import Validation from '$lib/components/Validation.svelte'
	import { capitalCase } from 'change-case'

	export let name = ''
	export let value = new Date().toJSON().slice(0, 10)

	const fix = (e: any) => {
		value = e.target.value || value
	}
</script>

<label for={name}>{capitalCase(name)}</label>
<input type="date" {name} id={name} {value} on:input={fix} />
<Validation {name} />
