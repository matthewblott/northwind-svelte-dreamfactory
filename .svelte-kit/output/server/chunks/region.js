import { B as Base } from "./base.js";
const table_name = "regions";
const Region = {};
Region.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Region.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Region.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Region.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].RegionId;
  return id;
};
Region.update = async (item) => {
  const id = item.RegionId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.RegionId;
};
Region.remove = async (id) => {
  return await Base.remove(table_name, id);
};
export {
  Region as R
};
