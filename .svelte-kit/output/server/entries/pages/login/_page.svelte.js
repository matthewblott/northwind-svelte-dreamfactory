import { c as create_ssr_component, h as add_attribute, e as escape, v as validate_component } from "../../../chunks/index3.js";
import { T as TextField } from "../../../chunks/TextField.js";
import { g as goto, r as reporter } from "../../../chunks/reporter.js";
import { validateSchema } from "@felte/validator-zod";
import { z } from "zod";
import { A as Auth } from "../../../chunks/auth.js";
import { V as Validation } from "../../../chunks/Validation.js";
import { capitalCase } from "change-case";
import { c as createForm } from "../../../chunks/create-form.js";
const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2)
});
const PasswordField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { value = "" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<label${add_attribute("for", name, 0)}>${escape(capitalCase(name))}</label>
<input${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} type="${"password"}">
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createForm({
    async onSubmit(values) {
      const email = values.email;
      const password = values.password;
      const isLoggedIn = await Auth.login(email, password);
      if (isLoggedIn) {
        goto("/");
      }
    },
    validate: validateSchema(UserSchema),
    extend: [reporter]
  });
  return `<h1>Login</h1>

<form><div class="${"filler"}"></div>
	<fieldset>${validate_component(TextField, "TextField").$$render(
    $$result,
    {
      name: "email",
      value: "read_write@northwi.nd"
    },
    {},
    {}
  )}
		${validate_component(PasswordField, "PasswordField").$$render($$result, { name: "password" }, {}, {})}
		<button>Submit</button></fieldset></form>`;
});
export {
  Page as default
};
