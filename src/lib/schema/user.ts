import { z } from 'zod'

const UserSchema = z.object({
	email: z.string().email(),
	password: z.string().min(2)
})

type User = z.infer<typeof UserSchema>

export { UserSchema, User }
