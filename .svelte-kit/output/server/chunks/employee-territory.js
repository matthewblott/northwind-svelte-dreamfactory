import { B as Base } from "./base.js";
import { z } from "zod";
const EmployeeTerritorySchema = z.object({
  EmployeeId: z.coerce.number(),
  TerritoryId: z.coerce.number().positive()
});
const table_name = "employeeterritories";
const EmployeeTerritory = {};
EmployeeTerritory.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
EmployeeTerritory.fetchFilteredPaged = async (limit, offset, filter) => {
  return await Base.fetchFilteredPaged("EmployeeTerritoriesView", limit, offset, filter);
};
EmployeeTerritory.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
EmployeeTerritory.fetchById = async (id) => {
  return Base.fetchById(table_name, id);
};
EmployeeTerritory.create = async (item) => {
  const items = [];
  items[0] = EmployeeTerritorySchema.parse(item);
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const fields = "EmployeeId,TerritoryId";
  const json = await Base.createByFields(table_name, fields, body);
  const resource = json.resource;
  const id = resource[0].TerritoryId;
  return id;
};
EmployeeTerritory.update = async (item) => {
  const id = item.TerritoryId;
  const body = JSON.stringify(item);
  const json = await Base.update(table_name, id, body);
  return json.TerritoryId;
};
EmployeeTerritory.remove = async (employeeId, territoryId) => {
  const filter = `(EmployeeId=${employeeId})and(TerritoryId=${territoryId})`;
  return await Base.removeByFilter(table_name, filter);
};
export {
  EmployeeTerritory as E,
  EmployeeTerritorySchema as a
};
