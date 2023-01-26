<script>
	import { ValidationMessage } from '@felte/reporter-svelte'
	export let name = ''
</script>

<ValidationMessage for={name} let:messages>
	<ul aria-live="polite">
		{#each messages ?? [] as message}
			<li>{message}</li>
		{/each}
	</ul>
</ValidationMessage>
