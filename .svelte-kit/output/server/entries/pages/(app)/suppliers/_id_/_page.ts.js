import { S as Supplier } from "../../../../../chunks/supplier.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params }) => {
  const item = await Supplier.fetchById(params.id);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
