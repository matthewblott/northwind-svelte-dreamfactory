import { z } from 'zod'

const ProductSchema = z.object({
	ProductId: z.number(),
	ProductName: z.string(),
	SupplierId: z.number(),
	CategoryId: z.number(),
	QuantityPerUnit: z.string(),
	UnitPrice: z.number(),
	UnitsInStock: z.number(),
	UnitsOnOrder: z.number(),
	ReorderLevel: z.number(),
	Discontinued: z.boolean()
})

type Product = z.infer<typeof ProductSchema>

export { ProductSchema, Product }
