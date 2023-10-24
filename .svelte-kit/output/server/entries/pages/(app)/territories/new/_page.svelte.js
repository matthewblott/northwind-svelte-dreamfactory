import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { T as Territory } from "../../../../../chunks/territory.js";
import { T as TerritorySchema, R as Regions } from "../../../../../chunks/Regions.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      delete values.TerritoryId;
      const id = await Territory.create(values);
      const url = `/territories/${id}`;
      goto(url);
    },
    validate: validateSchema(TerritorySchema),
    extend: [reporter]
  });
  return `<h1>Territory</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"TerritoryId"}">Id</label>
		<input id="${"TerritoryId"}" value="${"[New]"}" readonly>
		<input type="${"number"}" name="${"TerritoryId"}" value="${"0"}" style="${"display: none;"}">
		<label for="${"TerritoryDescription"}">Description</label>
		<input id="${"TerritoryDescription"}" name="${"TerritoryDescription"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "TerritoryDescription" }, {}, {})}

		${validate_component(Regions, "Regions").$$render($$result, { name: "RegionId" }, {}, {})}
		${validate_component(Validation, "Validation").$$render($$result, { name: "RegionId" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
