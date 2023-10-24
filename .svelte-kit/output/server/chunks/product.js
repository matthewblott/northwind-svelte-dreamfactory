import { B as Base } from "./base.js";
const table_name = "products";
const Product = {};
Product.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Product.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Product.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Product.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].ProductId;
  return id;
};
Product.update = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const id = item.ProductId;
  const fields = "ProductId";
  await Base.updateByFields(table_name, fields, body);
  return id;
};
Product.remove = async (id) => {
  return await Base.remove(table_name, id);
};
export {
  Product as P
};
