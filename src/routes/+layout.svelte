<script>
	import '@picocss/pico/css/pico.min.css'
	import { Menu, X } from 'lucide-svelte'
	import Nav from '$lib/Nav.svelte'

	$: checked = false
</script>

<header>
	<input class="peer" type="checkbox" id="toggle" bind:checked />
	<label for="toggle">
		<span class="menu">
			<Menu />
		</span>
		<span class="x">
			<X />
		</span>
	</label>
	<nav>
		<Nav {checked} />
	</nav>
</header>
<main>
	<slot />
</main>

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
		top: 0;
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
