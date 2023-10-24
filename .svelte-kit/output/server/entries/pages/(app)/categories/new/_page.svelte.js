import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index3.js";
import { S as Save } from "../../../../../chunks/save.js";
import { X as X_square } from "../../../../../chunks/x-square.js";
import "../../../../../chunks/category.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Category</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><label for="${"CategoryId"}">Id</label>
		<input id="${"CategoryId"}" value="${"[New]"}" readonly>
		<label for="${"CategoryName"}">Name</label>
		<input id="${"CategoryName"}" name="${"CategoryName"}">
		<label for="${"Description"}">Description</label>
		<input id="${"Description"}" name="${"Description"}"><br></fieldset></form>`;
});
export {
  Page as default
};
