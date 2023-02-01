import { z } from 'zod'

const OrderDetailsViewSchema = z.object({
	OrderId: z.number(),
	ProductId: z.number(),
	ProductName: z.string(),
	UnitPrice: z.number(),
	Quantity: z.number(),
	Discount: z.number()
})

type OrderDetailsView = z.infer<typeof OrderDetailsSchema>

export { OrderDetailsViewSchema, OrderDetailsView }
