import "../../../../chunks/index3.js";
import { S as Shipper } from "../../../../chunks/shipper.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const limit = 10;
  const offset = 0;
  const items = await Shipper.fetchPaged(limit, offset);
  if (items) {
    return items;
  }
  throw error(404, "Not found");
};
export {
  load
};
