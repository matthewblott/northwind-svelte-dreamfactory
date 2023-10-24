import { z } from "zod";
const OrderDetailsSchema = z.object({
  OrderId: z.number(),
  ProductId: z.coerce.number(),
  UnitPrice: z.number(),
  Quantity: z.number(),
  Discount: z.number()
});
export {
  OrderDetailsSchema as O
};
