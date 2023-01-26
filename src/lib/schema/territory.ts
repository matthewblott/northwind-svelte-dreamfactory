import { z } from 'zod'

const TerritorySchema = z.object({
	TerritoryId: z.number(),
	TerritoryDescription: z.string().max(20),
	RegionId: z.number().positive()
})

type Territory = z.infer<typeof TerritorySchema>

export { TerritorySchema, Territory }
