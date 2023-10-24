import { O as Order } from "../../../../../chunks/order.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params }) => {
  const item = await Order.fetchById(params.id);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
