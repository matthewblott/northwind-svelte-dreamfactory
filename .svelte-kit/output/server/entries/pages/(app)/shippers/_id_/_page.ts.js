import { S as Shipper } from "../../../../../chunks/shipper.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params }) => {
  const item = await Shipper.fetchById(parseInt(params.id));
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
