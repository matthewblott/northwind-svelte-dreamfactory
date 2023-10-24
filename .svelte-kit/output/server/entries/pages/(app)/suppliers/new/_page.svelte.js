import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { S as Supplier } from "../../../../../chunks/supplier.js";
import { S as SupplierSchema, a as SupplierRegions } from "../../../../../chunks/SupplierRegions.js";
import { T as TextField } from "../../../../../chunks/TextField.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.SupplierId;
      const id = await Supplier.create(values);
      const url = `/suppliers/${id}`;
      goto(url);
    },
    validate: validateSchema(SupplierSchema),
    extend: [reporter]
  });
  return `<h1>Supplier</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"SupplierId"}">Id</label>
		<input id="${"SupplierId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"SupplierId"}" value="${"0"}" style="${"display: none;"}">

		${validate_component(TextField, "TextField").$$render($$result, { name: "CompanyName" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ContactName" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "ContactTitle" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Address" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "City" }, {}, {})}
		${validate_component(SupplierRegions, "SupplierRegions").$$render($$result, { name: "Region" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "PostalCode" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Country" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Phone" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "Fax" }, {}, {})}
		${validate_component(TextField, "TextField").$$render($$result, { name: "HomePage" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
