import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { O as Order } from "../../../../../chunks/order.js";
import { O as OrderSchema, C as Customers, S as Shippers, a as OrderRegions } from "../../../../../chunks/OrderRegions.js";
import { E as Employees, D as DateField } from "../../../../../chunks/Employees.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { N as NumberField } from "../../../../../chunks/NumberField.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.OrderId;
      const id = await Order.create(values);
      const url = `/orders/${id}`;
      goto(url);
    },
    validate: validateSchema(OrderSchema),
    extend: [reporter]
  });
  return `<h1>Order</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"OrderId"}">Id</label>
		<input id="${"OrderId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"OrderId"}" value="${"0"}" style="${"display: none;"}">

		${validate_component(Customers, "Customers").$$render($$result, { name: "CustomerId" }, {}, {})}

		${validate_component(Employees, "Employees").$$render($$result, { name: "EmployeeId" }, {}, {})}

		${validate_component(DateField, "DateField").$$render($$result, { name: "OrderDate" }, {}, {})}
		${validate_component(DateField, "DateField").$$render($$result, { name: "RequiredDate" }, {}, {})}
		${validate_component(DateField, "DateField").$$render($$result, { name: "ShippedDate" }, {}, {})}
		${validate_component(Shippers, "Shippers").$$render($$result, { name: "ShipVia" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Freight" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipName" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipAddress" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipCity" }, {}, {})}
		${validate_component(OrderRegions, "OrderRegions").$$render($$result, { name: "ShipRegion" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipPostalCode" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ShipCountry" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
