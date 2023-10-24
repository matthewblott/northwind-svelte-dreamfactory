import { c as create_ssr_component, v as validate_component, h as add_attribute } from "../../../../../chunks/index3.js";
import { D as Delete } from "../../../../../chunks/delete.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import "../../../../../chunks/category.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1>Category</h1>
<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(Delete, "Delete").$$render($$result, {}, {}, {})} Delete</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"CategoryId"}">Id</label>
		<input id="${"CategoryId"}" name="${"CategoryId"}"${add_attribute("value", data.CategoryId, 0)} readonly>
		<label for="${"CategoryName"}">Name</label>
		<input id="${"CategoryName"}" name="${"CategoryName"}"${add_attribute("value", data.CategoryName, 0)}>
		<label for="${"Description"}">Description</label>
		<input id="${"Description"}" name="${"Description"}"${add_attribute("value", data.Description, 0)}><br></fieldset></form>`;
});
export {
  Page as default
};
