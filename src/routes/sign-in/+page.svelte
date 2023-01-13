<script lang="ts">
	import '@picocss/pico/css/pico.fluid.classless.min.css'
	import { createForm } from 'felte'
	import { ValidationMessage, reporter } from '@felte/reporter-svelte'
	import { z } from 'zod'
	import { validateSchema } from '@felte/validator-zod'

	const UserSchema = z.object({
		email: z.string().email().min(1),
		password: z.string().min(6)
	})

	type User = z.infer<typeof UserSchema>

	let submitted: User | undefined

	const { form } = createForm<User>({
		onSubmit(values) {
			submitted = values
		},
		validate: validateSchema(UserSchema),
		extend: [reporter]
	})
</script>

<h1>Basic Example - Svelte</h1>
<form use:form>
	<fieldset>
		<legend>Sign In</legend>
		<label for="email">Email:</label>
		<input type="email" name="email" id="email" />
		<ValidationMessage for="email" let:messages>
			<ul aria-live="polite">
				{#each messages ?? [] as message}
					<li>{message}</li>
				{/each}
			</ul>
		</ValidationMessage>
		<label for="password">Password:</label>
		<input type="password" name="password" id="password" />
		<ValidationMessage for="password" let:messages>
			<ul aria-live="polite">
				{#each messages ?? [] as message}
					<li>{message}</li>
				{/each}
			</ul>
		</ValidationMessage>
	</fieldset>
	<button type="submit">Submit</button>
	<button type="reset">Reset</button>
</form>
{#if submitted}
	<section>
		<h2>Submitted values</h2>
		<pre>{JSON.stringify(submitted, null, 2)}</pre>
	</section>
{/if}
