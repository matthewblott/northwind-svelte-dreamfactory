import { B as Base } from "./base.js";
const table_name = "orders";
const Order = {};
Order.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Order.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Order.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Order.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].OrderId;
  return id;
};
Order.update = async (item) => {
  const id = item.OrderId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.OrderId;
};
Order.remove = async (id) => {
  return await Base.remove(table_name, id);
};
Order.fetchRegions = async () => {
  const fieldName = "ShipRegion";
  const res = await Base.fetchDistinct(table_name, fieldName);
  return res;
};
export {
  Order as O
};
