import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape, v as validate_component, b as subscribe } from "../../../../../../../chunks/index3.js";
import "../../../../../../../chunks/territory.js";
import { V as Validation } from "../../../../../../../chunks/Validation.js";
import { g as goto, r as reporter } from "../../../../../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { S as Save } from "../../../../../../../chunks/save.js";
import { X as X_square } from "../../../../../../../chunks/x-square.js";
import { E as EmployeeTerritory, a as EmployeeTerritorySchema } from "../../../../../../../chunks/employee-territory.js";
import { p as page } from "../../../../../../../chunks/stores.js";
import { c as createForm } from "../../../../../../../chunks/create-form.js";
const Territories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Territory" } = $$props;
  let items = [];
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>Loading ...</p>
`;
    }
    return function() {
      return `
	${items ? `<label${add_attribute("for", name, 0)}>Territory</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ TerritoryId, TerritoryDescription }) => {
        return `${TerritoryId === value ? `<option${add_attribute("value", TerritoryId, 0)} selected>${escape(TerritoryDescription)}</option>` : `<option${add_attribute("value", TerritoryId, 0)}>${escape(TerritoryDescription)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathname = $page.url.pathname;
  const paths = pathname.split("/").filter((item) => item !== "");
  const employeeId = parseInt(paths[1]);
  createForm({
    async onSubmit(values) {
      const id = await EmployeeTerritory.create(values);
      const url = `/employees/${employeeId}/territories/${id}`;
      goto(url);
    },
    validate: validateSchema(EmployeeTerritorySchema),
    extend: [reporter]
  });
  $$unsubscribe_page();
  return `<h1>Employee Territory</h1>

<form><button>${validate_component(Save, "Save").$$render($$result, {}, {}, {})} Save</button>
	<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})}Cancel</button>
	<div class="${"filler"}"></div>
	<fieldset><input id="${"EmployeeId"}" name="${"EmployeeId"}" type="${"number"}"${add_attribute("value", employeeId, 0)} class="${"hidden"}">
		${validate_component(Territories, "Territories").$$render($$result, { name: "TerritoryId" }, {}, {})}</fieldset></form>`;
});
export {
  Page as default
};
