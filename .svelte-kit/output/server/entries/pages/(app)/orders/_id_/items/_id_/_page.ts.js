import { O as OrderDetails } from "../../../../../../../chunks/order-details.js";
import { e as error } from "../../../../../../../chunks/index.js";
const load = async ({ params, url }) => {
  const paths = url.pathname.split("/").filter((item2) => item2 !== "");
  const orderId = paths[1];
  const productId = params.id;
  const item = await OrderDetails.fetchById(orderId, productId);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
