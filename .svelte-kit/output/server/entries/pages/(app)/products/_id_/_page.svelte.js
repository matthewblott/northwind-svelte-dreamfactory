import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { P as Product } from "../../../../../chunks/product.js";
import { P as ProductSchema, C as Categories, S as Suppliers, a as CheckboxField } from "../../../../../chunks/CheckboxField.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { N as NumberField } from "../../../../../chunks/NumberField.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
import { g as getValue } from "../../../../../chunks/getValue.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({
    initialValues: data,
    async onSubmit(values) {
      const id = await Product.update(values);
      const url = `/products/${id}`;
      goto(url);
    },
    validate: validateSchema(ProductSchema),
    extend: [reporter]
  });
  let categoryId = getValue(data, "CategoryId");
  let supplierId = getValue(data, "SupplierId");
  let discontinued = Boolean(getValue(data, "Discontinued"));
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Product</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"ProductId"}">Id</label>
		<input id="${"ProductId"}" name="${"ProductId"}" readonly>
		<label for="${"ProductDescription"}">Description</label>
		<input id="${"ProductDescription"}" name="${"ProductName"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "ProductName" }, {}, {})}
		${validate_component(Categories, "Categories").$$render($$result, { name: "CategoryId", value: categoryId }, {}, {})}
		${validate_component(Suppliers, "Suppliers").$$render($$result, { name: "SupplierId", value: supplierId }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "QuantityPerUnit" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitPrice" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitsInStock" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "UnitsOnOrder" }, {}, {})}
		${validate_component(NumberField, "NumberField").$$render($$result, { name: "ReorderLevel" }, {}, {})}
		${validate_component(CheckboxField, "CheckboxField").$$render(
    $$result,
    {
      name: "Discontinued",
      checked: discontinued
    },
    {},
    {}
  )}</fieldset></form>`;
});
export {
  Page as default
};
