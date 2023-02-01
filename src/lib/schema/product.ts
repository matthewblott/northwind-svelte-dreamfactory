import { z } from 'zod'

const ProductSchema = z.object({
	ProductId: z.number(),
	ProductName: z.string().min(2),
	SupplierId: z.coerce.number(),
	CategoryId: z.coerce.number(),
	QuantityPerUnit: z.string(),
	UnitPrice: z.number(),
	UnitsInStock: z.number(),
	UnitsOnOrder: z.number(),
	ReorderLevel: z.number(),
	Discontinued: z.coerce.boolean()
})

type Product = z.infer<typeof ProductSchema>

export { ProductSchema, Product }
