import { z } from 'zod'

const UserSessionSchema = z.object({
	email: z.string().email(),
	first_name: z.string(),
	host: z.string(),
	id: z.number(),
	is_sys_admin: z.boolean(),
	last_login_date: z.coerce.date(),
	last_name: z.string(),
	name: z.string(),
	session_id: z.string(),
	session_token: z.string()
})

type UserSession = z.infer<typeof UserSessionSchema>

export { UserSessionSchema, UserSession }
