<script>
	export let checked = false
</script>

<ul class={checked ? 'display' : ''}>
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
</ul>

<style>
	@media (max-width: 1024px) {
		ul {
			display: none;
		}

		.display {
			flex-direction: column;
			display: inline-flex;
		}
	}
</style>
