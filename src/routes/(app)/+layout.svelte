<script lang="ts">
	import { isLoggedIn } from '$lib/stores/session'
	import Redirect from './Redirect.svelte'
	import { Menu as M, X } from 'lucide-svelte'
	import Nav from './Nav.svelte'

	$: checked = false

	const navChanged = () => {
		checked = false
	}
</script>

{#if $isLoggedIn}
	<header>
		<input class="peer" type="checkbox" id="toggle" bind:checked />
		<label for="toggle">
			<span class="menu">
				<M />
			</span>
			<span class="x">
				<X />
			</span>
		</label>
		<nav>
			<Nav {checked} on:changed={navChanged} />
		</nav>
	</header>
	<main>
		{#if !checked}
			<slot />
		{/if}
	</main>
{:else}
	<Redirect />
{/if}

<style>
	header {
		display: flex;
		flex-direction: row;
		place-content: end;
	}

	nav {
		margin-right: auto;
	}

	label {
		position: absolute;
		padding: 0.75rem;
		top: 100px;
		cursor: pointer;
	}

	.peer ~ label > .x {
		display: none;
	}

	.peer:checked ~ label > .menu {
		display: none;
	}
	.peer:checked ~ label > .menu {
		display: none;
	}

	.peer:checked ~ label > .x {
		display: inline-block;
	}

	@media (min-width: 1024px) {
		.peer ~ label > .menu {
			display: none;
		}
		.peer ~ label > .menu {
			display: none;
		}
	}

	.peer {
		display: none;
	}
</style>
