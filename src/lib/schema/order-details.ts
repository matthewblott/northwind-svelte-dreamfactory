import { z } from 'zod'

const OrderDetailsSchema = z.object({
	OrderId: z.number(),
	ProductId: z.coerce.number(),
	UnitPrice: z.number(),
	Quantity: z.number(),
	Discount: z.number()
})

type OrderDetails = z.infer<typeof OrderDetailsSchema>

export { OrderDetailsSchema, OrderDetails }
