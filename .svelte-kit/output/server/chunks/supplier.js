import { B as Base } from "./base.js";
const table_name = "suppliers";
const Supplier = {};
Supplier.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Supplier.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Supplier.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Supplier.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].SupplierId;
  return id;
};
Supplier.update = async (item) => {
  const id = item.SupplierId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.SupplierId;
};
Supplier.remove = async (id) => {
  return await Base.remove(table_name, id);
};
Supplier.fetchRegions = async () => {
  const fieldName = "Region";
  const res = await Base.fetchDistinct(table_name, fieldName);
  return res;
};
export {
  Supplier as S
};
