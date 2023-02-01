<script lang="ts">
	import Validation from '$lib/components/Validation.svelte'
	import { capitalCase } from 'change-case'

	export let name = ''
	export let value = ''
</script>

<label for={name}>{capitalCase(name)}</label>
<input type="number" id={name} {name} {value} />
<Validation {name} />
