import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape, v as validate_component, b as subscribe } from "../../../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../../../chunks/save.js";
import { X as X_square } from "../../../../../../../chunks/x-square.js";
import { O as OrderDetails } from "../../../../../../../chunks/order-details.js";
import { O as OrderDetailsSchema } from "../../../../../../../chunks/order-details2.js";
import { N as NumberField } from "../../../../../../../chunks/NumberField.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import "../../../../../../../chunks/product.js";
import { V as Validation } from "../../../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../../../chunks/create-form.js";
const Products = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Product" } = $$props;
  let items = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>Loading ...</p>
`;
    }
    return function() {
      return `
	${items ? `<label${add_attribute("for", name, 0)}>Product</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ ProductId, ProductName }) => {
        return `${ProductId === value ? `<option${add_attribute("value", ProductId, 0)} selected>${escape(ProductName)}</option>` : `<option${add_attribute("value", ProductId, 0)}>${escape(ProductName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const orderId = parseInt($page.params.id);
  createForm({
    initialValues: { OrderId: orderId },
    async onSubmit(values) {
      await OrderDetails.create(values);
      const productId = values.ProductId;
      const url = `/orders/${$page.params.id}/items/${productId}`;
      goto(url);
    },
    validate: validateSchema(OrderDetailsSchema),
    extend: [reporter]
  });
  $$unsubscribe_page();
  return `<h1>Order Item</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<fieldset><label for="${"OrderId"}">Order Id</label>
		<input id="${"OrderId"}" name="${"OrderId"}" type="${"number"}" readonly>
		${validate_component(Products, "Products").$$render($$result, { name: "ProductId" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitPrice" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Quantity" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "Discount" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
