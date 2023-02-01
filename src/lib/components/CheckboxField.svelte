<script lang="ts">
	import Validation from '$lib/components/Validation.svelte'
	import { capitalCase } from 'change-case'

	export let name = ''
	export let checked: boolean = false
</script>

<label for={name}>{capitalCase(name)}</label>
{#if checked}
	<input type="checkbox" id={name} {name} checked />
{:else}
	<input type="checkbox" id={name} {name} />
{/if}
<Validation {name} />
