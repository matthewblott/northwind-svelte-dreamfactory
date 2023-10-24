import { B as Base } from "./base.js";
const table_name = "employees";
const Employee = {};
Employee.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
Employee.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
Employee.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
Employee.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].EmployeeId;
  return id;
};
Employee.update = async (item) => {
  const id = item.EmployeeId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.EmployeeId;
};
Employee.remove = async (id) => {
  return await Base.remove(table_name, id);
};
Employee.fetchRegions = async () => {
  const fieldName = "Region";
  const res = await Base.fetchDistinct(table_name, fieldName);
  return res;
};
export {
  Employee as E
};
