import { c as create_ssr_component, h as add_attribute, e as escape, v as validate_component, q as is_promise, n as noop, o as each } from "./index3.js";
import { V as Validation } from "./Validation.js";
import { capitalCase } from "change-case";
import "./employee.js";
const DateField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { value = new Date().toJSON().slice(0, 10) } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<label${add_attribute("for", name, 0)}>${escape(capitalCase(name))}</label>
<input type="${"date"}"${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}${add_attribute("value", value, 0)}>
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const Employees = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "ReportsTo" } = $$props;
  let items = [];
  const caption = () => {
    return capitalCase(name);
  };
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
	${items ? `<label${add_attribute("for", name, 0)}>${escape(caption())}</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ EmployeeId, FirstName, LastName }) => {
        return `${EmployeeId === value ? `<option${add_attribute("value", EmployeeId, 0)} selected>${escape(LastName)}, ${escape(FirstName)}</option>` : `<option${add_attribute("value", EmployeeId, 0)}>${escape(LastName)}, ${escape(FirstName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
export {
  DateField as D,
  Employees as E
};
