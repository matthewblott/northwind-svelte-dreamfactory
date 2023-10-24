import { T as Territory } from "../../../../../../../chunks/territory.js";
import { e as error } from "../../../../../../../chunks/index.js";
const load = async ({ params, url }) => {
  const paths = url.pathname.split("/").filter((item2) => item2 !== "");
  paths[1];
  const item = await Territory.fetchById(params.id);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
