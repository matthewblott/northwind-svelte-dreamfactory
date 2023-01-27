import { z } from 'zod'

const RegionSchema = z.object({
	RegionId: z.coerce.number(),
	RegionDescription: z.string().min(1).max(20)
})

type Region = z.infer<typeof RegionSchema>

export { RegionSchema, Region }
