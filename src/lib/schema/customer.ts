import { z } from 'zod'

const CustomerSchema = z.object({
	CustomerId: z.string().min(1).max(5),
	CompanyName: z.string().min(1).max(50),
	ContactName: z.string().max(25),
	ContactTitle: z.string().max(30),
	Address: z.string().max(50),
	City: z.string().max(15),
	Region: z.string().max(15),
	PostalCode: z.string().max(9),
	Country: z.string().max(15),
	Phone: z.string().min(1).max(15),
	Fax: z.string().max(15)
})

type Customer = z.infer<typeof CustomerSchema>
export { CustomerSchema, Customer }
