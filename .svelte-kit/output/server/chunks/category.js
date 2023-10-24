import { B as Base } from "./base.js";
import { z } from "zod";
z.object({
  CategoryName: z.string().min(2).max(10),
  Description: z.string().max(20)
});
const Category = {};
const table_name = "categories";
Category.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Category.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Category.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Category.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].CategoryId;
  return id;
};
Category.update = async (item) => {
  const id = item.CategoryId;
  const body = JSON.stringify(item);
  Base.update(table_name, id, body);
};
Category.remove = async (id) => {
  Base.remove(table_name, id);
};
export {
  Category as C
};
