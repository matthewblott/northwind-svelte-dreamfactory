import { B as Base } from "./base.js";
const table_name = "territories";
const Territory = {};
Territory.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Territory.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Territory.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Territory.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].TerritoryId;
  return id;
};
Territory.update = async (item) => {
  const id = item.TerritoryId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.TerritoryId;
};
Territory.remove = async (id) => {
  return await Base.remove(table_name, id);
};
export {
  Territory as T
};
