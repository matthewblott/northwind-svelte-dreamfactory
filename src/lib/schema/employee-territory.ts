import { z } from 'zod'

const EmployeeTerritorySchema = z.object({
	EmployeeId: z.number()
	TerritoryId: z.number()
})

type EmployeeTerritory = z.infer<typeof EmployeeTerritorySchema>

export { EmployeeTerritorySchema, EmployeeTerritory }
