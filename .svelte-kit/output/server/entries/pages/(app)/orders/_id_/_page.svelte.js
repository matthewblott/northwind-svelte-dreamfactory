import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../chunks/delete.js";
import { E as Edit } from "../../../../../chunks/edit.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { O as Order } from "../../../../../chunks/order.js";
import { O as OrderSchema, C as Customers, S as Shippers, a as OrderRegions } from "../../../../../chunks/OrderRegions.js";
import { E as Employees, D as DateField } from "../../../../../chunks/Employees.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { N as NumberField } from "../../../../../chunks/NumberField.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
import { g as getValue } from "../../../../../chunks/getValue.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({
    initialValues: data,
    async onSubmit(values) {
      const id = await Order.update(values);
      const url = `/orders/${id}`;
      goto(url);
    },
    validate: validateSchema(OrderSchema),
    extend: [reporter]
  });
  getValue(data, "OrderId");
  let orderDate = getValue(data, "OrderDate").substring(0, 10);
  let requiredDate = getValue(data, "RequiredDate").substring(0, 10);
  let shippedDate = getValue(data, "ShippedDate").substring(0, 10);
  let customerId = getValue(data, "CustomerId");
  let shipperId = getValue(data, "ShipVia");
  let shipRegion = getValue(data, "ShipRegion");
  let employeeId = getValue(data, "EmployeeId");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Order</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})} Items</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"OrderId"}">Id</label>
		<input id="${"OrderId"}" name="${"OrderId"}" readonly>
		${validate_component(Customers, "Customers").$$render($$result, { name: "CustomerId", value: customerId }, {}, {})}
		${validate_component(Employees, "Employees").$$render($$result, { name: "EmployeeId", value: employeeId }, {}, {})}
		${validate_component(DateField, "DateField").$$render($$result, { name: "OrderDate", value: orderDate }, {}, {})}
		${validate_component(DateField, "DateField").$$render(
    $$result,
    {
      name: "RequiredDate",
      value: requiredDate
    },
    {},
    {}
  )}
		${validate_component(DateField, "DateField").$$render($$result, { name: "shippedDate", value: shippedDate }, {}, {})}
		${validate_component(Shippers, "Shippers").$$render($$result, { name: "ShipVia", value: shipperId }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Freight" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipAddress" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipCity" }, {}, {})}
		${validate_component(OrderRegions, "OrderRegions").$$render($$result, { name: "ShipRegion", value: shipRegion }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipPostalCode" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipCountry" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
