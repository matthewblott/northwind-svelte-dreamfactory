import { z } from 'zod'

const EmployeeTerritoryViewSchema = z.object({
	EmployeeId: z.coerce.number(),
	TerritoryId: z.coerce.number().positive()
})

type EmployeeTerritoryView = z.infer<typeof EmployeeTerritoryViewSchema>

export { EmployeeTerritoryViewSchema, EmployeeTerritoryView }
