import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { P as Product } from "../../../../../chunks/product.js";
import { P as ProductSchema, C as Categories, S as Suppliers, a as CheckboxField } from "../../../../../chunks/CheckboxField.js";
import { N as NumberField } from "../../../../../chunks/NumberField.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.ProductId;
      if (values.CategoryId === "") {
        delete values.CategoryId;
      } else {
        values.CategoryId = parseInt(values.CategoryId);
      }
      if (values.SupplierId === "") {
        delete values.SupplierId;
      } else {
        values.SupplierId = parseInt(values.SupplierId);
      }
      if (values.Discontinued) {
        values.Discontinued = 1;
      } else {
        values.Discontinued = 0;
      }
      const id = await Product.create(values);
      const url = `/products/${id}`;
      goto(url);
    },
    validate: validateSchema(ProductSchema),
    extend: [reporter]
  });
  return `<h1>Product</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"ProductId"}">Id</label>
		<input id="${"ProductId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"ProductId"}" value="${"0"}" style="${"display: none;"}">
		${validate_component(TextField, "TextField").$$render($$result, { name: "ProductName" }, {}, {})}
		${validate_component(Categories, "Categories").$$render($$result, { name: "CategoryId" }, {}, {})}
		${validate_component(Suppliers, "Suppliers").$$render($$result, { name: "SupplierId" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "QuantityPerUnit" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitPrice" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitsInStock" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitsOnOrder" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "ReorderLevel" }, {}, {})}
		${validate_component(CheckboxField, "CheckboxField").$$render($$result, { name: "Discontinued" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
