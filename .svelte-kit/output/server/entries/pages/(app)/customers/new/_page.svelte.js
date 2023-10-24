import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { C as Customer } from "../../../../../chunks/customer.js";
import { C as CustomerSchema, a as CustomerRegions } from "../../../../../chunks/CustomerRegions.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      const id = await Customer.create(values);
      const url = `/customers/${id}`;
      goto(url);
    },
    validate: validateSchema(CustomerSchema),
    extend: [reporter]
  });
  return `<h1>Customer</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"CustomerId"}">Id</label>
		<input id="${"CustomerId"}" name="${"CustomerId"}" maxlength="${"5"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "CustomerId" }, {}, {})}

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

		${validate_component(CustomerRegions, "CustomerRegions").$$render($$result, {}, {}, {})}

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
		${validate_component(Validation, "Validation").$$render($$result, { name: "Fax" }, {}, {})}</fieldset>
	<button type="${"submit"}" class="${"hidden"}"></button>
	<button type="${"reset"}" class="${"hidden"}"></button></form>`;
});
export {
  Page as default
};
