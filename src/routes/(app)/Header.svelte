<script>
	import { goto } from '$app/navigation'
	import { Auth } from '$lib/auth'
	import { Menu, X } from 'lucide-svelte'

	const logout = () => {
		Auth.logout()
		goto('/login')
	}
</script>

<input class="peer" type="checkbox" id="toggle" />
<label for="toggle">
	<Menu />
	<X />
</label>
<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/categories">Categories</a></li>
		<li><a href="/customers">Customers</a></li>
		<li><a href="/employees">Employees</a></li>
		<li><a href="/orders">Orders</a></li>
		<li><a href="/products">Products</a></li>
		<li><a href="/regions">Regions</a></li>
		<li><a href="/shippers">Shippers</a></li>
		<li><a href="/suppliers">Suppliers</a></li>
		<li><a href="/territories">Territories</a></li>
		<li><a on:click|preventDefault={logout}>Logout</a></li>
	</ul>
</nav>
