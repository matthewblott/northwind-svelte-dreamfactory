import { z } from 'zod'

const EmployeeTerritorySchema = z.object({
	EmployeeId: z.coerce.number(),
	TerritoryId: z.coerce.number().positive()
})

type EmployeeTerritory = z.infer<typeof EmployeeTerritorySchema>

export { EmployeeTerritorySchema, EmployeeTerritory }
