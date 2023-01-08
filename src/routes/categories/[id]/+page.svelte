<script>
	export let data
</script>

<h1>Category</h1>

<form>
	<fieldset>
		<label for="CategoryId">Id</label>
		<input id="CategoryId" name="CategoryId" value={data.CategoryId} readonly />
		<label for="CategoryDescription">Description</label>
		<input
			id="CategoryDescription"
			name="CategoryDescription"
			type="text"
			readonly
			value={data.Description}
		/>
	</fieldset>
</form>
