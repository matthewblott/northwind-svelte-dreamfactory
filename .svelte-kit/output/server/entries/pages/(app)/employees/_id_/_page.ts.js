import { E as Employee } from "../../../../../chunks/employee.js";
import { e as error } from "../../../../../chunks/index.js";
const load = async ({ params }) => {
  const item = await Employee.fetchById(params.id);
  if (item) {
    return item;
  }
  throw error(404, "Not found");
};
export {
  load
};
