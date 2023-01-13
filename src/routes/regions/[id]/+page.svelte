<script>
	/** @type {import('./$types').LayoutData} */
	export let data

	import { Region } from '$lib/data/region'

	const item = {}

	item.Description = 'one two buckle shoe'

	let promise = Promise.resolve()

	import { onMount } from 'svelte'

	onMount(async () => {
		promise = await data.item
	})

	const onSave = async (e) => {
		e.preventDefault()

		await Region.create(item)
		// await data._create(item)

		// const target = e.target
	}
</script>

<h1>{data.title}</h1>

{#await promise}
	<p>Loading ...</p>
{:then value}
	{#if value}
		<form action="POST">
			<fieldset>
				<label for="RegionId">Id</label>
				<input id="RegionId" name="RegionId" type="text" value={value.RegionId} readonly />
				<label for="RegionDescription">Description</label>
				<input
					id="RegionDescription"
					name="RegionDescription"
					type="text"
					readonly
					value={value.RegionDescription}
				/>
				<button on:click={onSave}>Save</button>
			</fieldset>
		</form>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
