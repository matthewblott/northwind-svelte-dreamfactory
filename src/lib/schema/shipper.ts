import { z } from 'zod'

const ShipperSchema = z.object({
	ShipperId: z.number(),
	CompanyName: z.string().min(1).max(50),
	Phone: z.string().min(1).max(15)
})

type Shipper = z.infer<typeof ShipperSchema>

export { ShipperSchema, Shipper }
