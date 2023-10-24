import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../../../chunks/delete.js";
import { S as Save } from "../../../../../../../chunks/save.js";
import { X as X_square } from "../../../../../../../chunks/x-square.js";
import { O as OrderDetails } from "../../../../../../../chunks/order-details.js";
import { O as OrderDetailsSchema } from "../../../../../../../chunks/order-details2.js";
import { N as NumberField } from "../../../../../../../chunks/NumberField.js";
import { T as TextField } from "../../../../../../../chunks/TextField.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { c as createForm } from "../../../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pathname = $page.url.pathname;
  const paths = pathname.split("/").filter((item) => item !== "");
  parseInt(paths[1]);
  createForm({
    initialValues: data.resource[0],
    async onSubmit(values) {
      const orderId2 = values.OrderId;
      const productId = values.ProductId;
      await OrderDetails.update(values);
      const url = `/orders/${orderId2}/items/${productId}`;
      goto(url);
    },
    validate: validateSchema(OrderDetailsSchema),
    extend: [reporter]
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<h1>Order Item</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"OrderId"}">Order Id</label>
		<input id="${"OrderId"}" name="${"OrderId"}" readonly>
		<input id="${"ProductId"}" name="${"ProductId"}" type="${"hidden"}">

		${validate_component(TextField, "TextField").$$render($$result, { name: "ProductName" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitPrice" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Quantity" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Discount" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
