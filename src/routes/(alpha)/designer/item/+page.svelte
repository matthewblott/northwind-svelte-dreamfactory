<script>
	import { Save, Delete, Edit } from 'lucide-svelte'
</script>

<h1>Customer</h1>
<form data-felte-reporter-svelte-id="vRfEY8xa0gV1W3Z56h4Cr" novalidate="">
	<a href="#" role="button">
		<Save />
		Save</a
	>
	<a href="#" role="button"><Delete /> Delete</a>
	<div class="my-button">
		<a href="#" role="button"><Delete /> Delete</a>
	</div>
	<button>Save</button>
	<button>Save</button>

	<fieldset>
		<label for="CustomerId">Id</label> <input id="CustomerId" name="CustomerId" readonly="" />
		<label
			>Name
			<input name="CompanyName" />
		</label>

		<label
			>Contact
			<input name="ContactName" />
		</label>

		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="ContactTitle">Contact Title</label>
		<input id="ContactTitle" name="ContactTitle" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="Address">Address</label>
		<input id="Address" name="Address" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="City">City</label> <input id="City" name="City" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="Region">Region</label>
		<select name="Region" id="Region"
			><option value="" /><option value="British Isles">British Isles</option><option
				value="Central America">Central America</option
			><option value="Eastern">Eastern</option><option value="North America">North America</option
			><option value="Northern">Northern</option><option value="Northern Europe"
				>Northern Europe</option
			><option value="Scandinavia">Scandinavia</option><option value="South America"
				>South America</option
			><option value="Southern Europe">Southern Europe</option><option value="Western Europe"
				>Western Europe</option
			></select
		><!--<CustomerRegions>--> <label for="PostalCode">Postal Code</label>
		<input id="PostalCode" name="PostalCode" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="Country">Country</label>
		<input id="Country" name="Country" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="Phone">Phone</label> <input id="Phone" name="Phone" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>--> <label for="Fax">Fax</label> <input id="Fax" name="Fax" /><br />
		<div style="display: none;" />
		<ul aria-live="polite" />
		<!--<Validation>-->
	</fieldset>
	<button type="submit" class="hidden" /> <button type="reset" class="hidden" />
</form>
