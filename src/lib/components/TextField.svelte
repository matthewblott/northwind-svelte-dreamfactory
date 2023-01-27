<script lang="ts">
	import Validation from '$lib/components/Validation.svelte'
	import { capitalCase } from 'change-case'

	export let name = ''
	export let value = ''
	const caption = () => {
		return capitalCase(name)
	}
</script>

<label for={name}>{caption()}</label>
<input id={name} {name} {value} />
<Validation {name} />
