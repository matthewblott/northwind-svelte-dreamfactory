import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../../../chunks/index3.js";
import { D as Delete } from "../../../../../../../chunks/delete.js";
import { S as Save } from "../../../../../../../chunks/save.js";
import { X as X_square } from "../../../../../../../chunks/x-square.js";
import "../../../../../../../chunks/employee-territory.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { c as createForm } from "../../../../../../../chunks/create-form.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const pathname = $page.url.pathname;
  const paths = pathname.split("/").filter((item) => item !== "");
  parseInt(paths[1]);
  createForm({ initialValues: data });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<h1>Employee Territory</h1>

<form><button disabled>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})} Delete </button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"TerritoryId"}">Id</label>
		<input id="${"TerritoryId"}" name="${"TerritoryId"}" type="${"number"}" readonly>
		<label for="${"TerritoryDescription"}">Description</label>
		<input id="${"TerritoryDescription"}" name="${"TerritoryDescription"}" readonly></fieldset></form>`;
});
export {
  Page as default
};
