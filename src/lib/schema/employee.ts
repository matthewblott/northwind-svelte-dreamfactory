import { z } from 'zod'

const EmployeeSchema = z.object({
	EmployeeId: z.number(),
	LastName: z.string(),
	FirstName: z.string(),
	Title: z.string(),
	TitleOfCourtesy: z.string(),
	BirthDate: z.coerce.date(),
	HireDate: z.coerce.date(),
	Address: z.string().max(50),
	City: z.string().max(15),
	Region: z.string().max(15),
	PostalCode: z.string().max(9),
	Country: z.string().max(15),
	HomePhone: z.string().min(1).max(15),
	Extension: z.coerce.number(),
	Photo: z.any(),
	Notes: z.string(),
	ReportsTo: z.coerce.number(),
	PhotoPath: z.string()
})

type Employee = z.infer<typeof EmployeeSchema>

export { EmployeeSchema, Employee }
