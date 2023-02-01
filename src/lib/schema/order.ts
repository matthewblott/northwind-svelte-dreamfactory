import { z } from 'zod'

const OrderSchema = z.object({
	OrderId: z.number(),
	CustomerId: z.string().min(1).max(5),
	EmployeeId: z.coerce.number().positive(),
	OrderDate: z.coerce.date(),
	RequiredDate: z.coerce.date(),
	ShippedDate: z.coerce.date(),
	ShipVia: z.coerce.number(),
	Freight: z.number(),
	ShipName: z.string(),
	ShipAddress: z.string().max(50),
	ShipCity: z.string().max(15),
	ShipRegion: z.string().max(15),
	ShipPostalCode: z.string().max(9),
	ShipCountry: z.string().max(15)
})

type Order = z.infer<typeof OrderSchema>

export { OrderSchema, Order }
