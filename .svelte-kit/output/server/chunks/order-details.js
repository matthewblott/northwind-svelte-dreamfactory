import { B as Base } from "./base.js";
const table_name = "orderdetails";
const OrderDetails = {};
OrderDetails.fetchAll = async () => {
  return Base.fetchAll(table_name);
};
OrderDetails.fetchPaged = async (limit, offset) => {
  return await Base.fetchPaged(table_name, limit, offset);
};
OrderDetails.fetchById = async (orderId, productId) => {
  const filter = `(OrderId=${orderId})and(ProductId=${productId})`;
  return await Base.fetchFiltered("OrderDetailsView", filter);
};
OrderDetails.fetchFilteredPaged = async (limit, offset, filter) => {
  return await Base.fetchFilteredPaged("OrderDetailsView", limit, offset, filter);
};
OrderDetails.create = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const json = await Base.create(table_name, body);
  const resource = json.resource;
  const id = resource[0].OrderDetailsId;
  return id;
};
OrderDetails.update = async (item) => {
  const items = [];
  items[0] = item;
  const wrapper = {
    resource: items
  };
  const body = JSON.stringify(wrapper);
  const fields = "OrderId,ProductId";
  const json = await Base.updateByFields(table_name, fields, body);
  return json.OrderDetailsId;
};
OrderDetails.remove = async (orderId, productId) => {
  const filter = `(OrderId=${orderId})and(ProductId=${productId})`;
  return await Base.removeByFilter(table_name, filter);
};
export {
  OrderDetails as O
};
