import "../../../../chunks/index3.js";
import { T as Territory } from "../../../../chunks/territory.js";
import { e as error } from "../../../../chunks/index.js";
const load = async ({ params }) => {
  const limit = 10;
  const offset = 0;
  const items = await Territory.fetchPaged(limit, offset);
  if (items) {
    return items;
  }
  throw error(404, "Not found");
};
export {
  load
};
