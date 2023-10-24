import { c as create_ssr_component, v as validate_component, o as each, e as escape } from "./index3.js";
import { V as ValidationMessage } from "./ValidationMessage.js";
const Validation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${validate_component(ValidationMessage, "ValidationMessage").$$render($$result, { for: name }, {}, {
    default: ({ messages }) => {
      return `<ul aria-live="${"polite"}">${each(messages ?? [], (message) => {
        return `<li>${escape(message)}</li>`;
      })}</ul>`;
    }
  })}`;
});
export {
  Validation as V
};
