import { z } from 'zod'

const Category = z.object({
	CategoryName: z.string().min(2).max(10),
	Description: z.string().max(20)
})

export { Category }
