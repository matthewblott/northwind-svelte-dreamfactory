import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { V as ValidationMessage } from "../../../../../chunks/ValidationMessage.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { S as Shipper } from "../../../../../chunks/shipper.js";
import { S as ShipperSchema } from "../../../../../chunks/shipper2.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.ShipperId;
      const id = await Shipper.create(values);
      const url = `/shippers/${id}`;
      goto(url);
    },
    validate: validateSchema(ShipperSchema),
    extend: [reporter]
  });
  return `<h1>Shipper</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"ShipperId"}">Id</label>
		<input id="${"ShipperId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"ShipperId"}" value="${"0"}" style="${"display: none;"}">
		<label for="${"CompanyName"}">Name</label>
		<input id="${"CompanyName"}" name="${"CompanyName"}">
		${validate_component(ValidationMessage, "ValidationMessage").$$render($$result, { for: "CompanyName" }, {}, {
    default: ({ messages }) => {
      return `<ul aria-live="${"polite"}">${each(messages ?? [], (message) => {
        return `<li>${escape(message)}</li>`;
      })}</ul>`;
    }
  })}

		<label for="${"Phone"}">Phone</label>
		<input id="${"Phone"}" name="${"Phone"}"><br>

		${validate_component(ValidationMessage, "ValidationMessage").$$render($$result, { for: "Phone" }, {}, {
    default: ({ messages }) => {
      return `<ul aria-live="${"polite"}">${each(messages ?? [], (message) => {
        return `<li>${escape(message)}</li>`;
      })}</ul>`;
    }
  })}</fieldset></form>`;
});
export {
  Page as default
};
