<script lang="ts">
	import { Employee } from '$lib/data/employee'
	import { onMount } from 'svelte'
	import { capitalCase } from 'change-case'
	let promise: any = Promise.resolve()

	export let value: number
	export let name: string = 'ReportsTo'

	let items: any = []

	const caption = () => {
		return capitalCase(name)
	}

	onMount(async () => {
		promise = await Employee.fetchAll()
		items = promise.resource
	})
</script>

{#await promise}
	<p>Loading ...</p>
{:then}
	{#if items}
		<label for={name}>{caption()}</label>
		<select {name} id={name}>
			{#each items as { EmployeeId, FirstName, LastName }}
				{#if EmployeeId === value}
					<option value={EmployeeId} selected>{LastName}, {FirstName}</option>
				{:else}
					<option value={EmployeeId}>{LastName}, {FirstName}</option>
				{/if}
			{/each}
		</select>
	{/if}
{:catch error}
	<p>Something went wrong: {error.message}</p>
{/await}
