import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { g as goto, r as reporter } from "../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { T as Territory } from "../../../../../chunks/territory.js";
import { T as TerritorySchema, R as Regions } from "../../../../../chunks/Regions.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
import { g as getValue } from "../../../../../chunks/getValue.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({
    initialValues: data,
    async onSubmit(values) {
      const id = await Territory.update(values);
      const url = `/territories/${id}`;
      goto(url);
    },
    validate: validateSchema(TerritorySchema),
    extend: [reporter]
  });
  let regionId = getValue(data, "RegionId");
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Territory</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})} Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"TerritoryId"}">Id</label>
		<input id="${"TerritoryId"}" name="${"TerritoryId"}" readonly>
		<label for="${"TerritoryDescription"}">Description</label>
		<input id="${"TerritoryDescription"}" name="${"TerritoryDescription"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "TerritoryDescription" }, {}, {})}

		${validate_component(Regions, "Regions").$$render($$result, { value: regionId, name: "RegionId" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
