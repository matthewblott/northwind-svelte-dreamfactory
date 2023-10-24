import { B as Base } from "./base.js";
const table_name = "customers";
const Customer = {};
Customer.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Customer.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Customer.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Customer.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].CustomerId;
  return id;
};
Customer.update = async (item) => {
  const id = item.CustomerId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.CustomerId;
};
Customer.remove = async (id) => {
  return await Base.remove(table_name, id);
};
Customer.fetchRegions = async () => {
  const fieldName = "Region";
  const res = await Base.fetchDistinct(table_name, fieldName);
  return res;
};
export {
  Customer as C
};
