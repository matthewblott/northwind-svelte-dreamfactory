import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { S as Supplier } from "../../../../../chunks/supplier.js";
import { S as SupplierSchema, a as SupplierRegions } from "../../../../../chunks/SupplierRegions.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
import { g as getValue } from "../../../../../chunks/getValue.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({
    initialValues: data,
    async onSubmit(values) {
      const id = await Supplier.update(values);
      const url = `/suppliers/${id}`;
      goto(url);
    },
    validate: validateSchema(SupplierSchema),
    extend: [reporter]
  });
  let region = getValue(data, "Region");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Supplier</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"SupplierId"}">Id</label>
		<input id="${"SupplierId"}" name="${"SupplierId"}" readonly>

		<label for="${"CompanyName"}">Name</label>
		<input id="${"CompanyName"}" name="${"CompanyName"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "CompanyName" }, {}, {})}

		<label for="${"ContactName"}">Contact</label>
		<input id="${"ContactName"}" name="${"ContactName"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "ContactName" }, {}, {})}

		<label for="${"ContactTitle"}">Contact Title</label>
		<input id="${"ContactTitle"}" name="${"ContactTitle"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "ContactTitle" }, {}, {})}

		<label for="${"Address"}">Address</label>
		<input id="${"Address"}" name="${"Address"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Address" }, {}, {})}

		<label for="${"City"}">City</label>
		<input id="${"City"}" name="${"City"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "City" }, {}, {})}

		${validate_component(SupplierRegions, "SupplierRegions").$$render($$result, { value: region }, {}, {})}

		<label for="${"PostalCode"}">Postal Code</label>
		<input id="${"PostalCode"}" name="${"PostalCode"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "PostalCode" }, {}, {})}

		<label for="${"Country"}">Country</label>
		<input id="${"Country"}" name="${"Country"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Country" }, {}, {})}

		<label for="${"Phone"}">Phone</label>
		<input id="${"Phone"}" name="${"Phone"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Phone" }, {}, {})}

		<label for="${"Fax"}">Fax</label>
		<input id="${"Fax"}" name="${"Fax"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Fax" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
