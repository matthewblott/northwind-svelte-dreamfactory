import { c as create_ssr_component, h as add_attribute, e as escape, v as validate_component } from "./index3.js";
import { V as Validation } from "./Validation.js";
import { capitalCase } from "change-case";
const TextField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<label${add_attribute("for", name, 0)}>${escape(capitalCase(name))}</label>
<input${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("value", value, 0)}>
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
export {
  TextField as T
};
