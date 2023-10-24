import { P as Product } from "../../../../../chunks/product.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params }) => {
  const item = await Product.fetchById(params.id);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
