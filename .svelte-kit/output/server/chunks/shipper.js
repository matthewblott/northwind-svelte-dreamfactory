import { B as Base } from "./base.js";
const table_name = "shippers";
const Shipper = {};
Shipper.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Shipper.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Shipper.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Shipper.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].ShipperId;
  return id;
};
Shipper.update = async (item) => {
  const id = item.ShipperId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.ShipperId;
};
Shipper.remove = async (id) => {
  return await Base.remove(table_name, id);
};
export {
  Shipper as S
};
