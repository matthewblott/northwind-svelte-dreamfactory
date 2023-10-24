import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { S as Shipper } from "../../../../../chunks/shipper.js";
import { S as ShipperSchema } from "../../../../../chunks/shipper2.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({
    initialValues: data,
    async onSubmit(values) {
      const id = await Shipper.update(values);
      const url = `/shippers/${id}`;
      goto(url);
    },
    validate: validateSchema(ShipperSchema),
    extend: [reporter]
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Shipper</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"ShipperId"}">Id</label>
		<input id="${"ShipperId"}" type="${"number"}" name="${"ShipperId"}" readonly>
		<label for="${"CompanyName"}">Name</label>
		<input id="${"CompanyName"}" name="${"CompanyName"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "CompanyName" }, {}, {})}

		<label for="${"Phone"}">Phone</label>
		<input id="${"Phone"}" name="${"Phone"}"><br>
		${validate_component(Validation, "Validation").$$render($$result, { name: "Phone" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
