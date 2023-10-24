import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import { V as Validation } from "../../../../../chunks/Validation.js";
import { c as createForm } from "../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  createForm({ initialValues: data });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Region</h1>

<form><button disabled>${validate_component(Save, "Save").$$render($$result, {}, {}, {})}Save</button>
	<button disabled>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})}Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"RegionId"}">Id</label>
		<input id="${"RegionId"}" type="${"number"}" name="${"RegionId"}" readonly>
		${validate_component(Validation, "Validation").$$render($$result, { name: "RegionId" }, {}, {})}
		<label for="${"RegionDescription"}">Description</label>
		<input id="${"RegionDescription"}" name="${"RegionDescription"}">
		${validate_component(Validation, "Validation").$$render($$result, { name: "RegionDescription" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
