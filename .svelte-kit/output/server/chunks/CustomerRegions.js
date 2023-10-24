import { z } from "zod";
import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape } from "./index3.js";
import "./customer.js";
const CustomerSchema = z.object({
  CustomerId: z.string().min(1).max(5),
  CompanyName: z.string().min(1).max(50),
  ContactName: z.string().max(25),
  ContactTitle: z.string().max(30),
  Address: z.string().max(50),
  City: z.string().max(15),
  Region: z.string().max(15),
  PostalCode: z.string().max(9),
  Country: z.string().max(15),
  Phone: z.string().min(1).max(15),
  Fax: z.string().max(15)
});
const CustomerRegions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value = "" } = $$props;
  let { name = "Region" } = $$props;
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
	${items ? `<label${add_attribute("for", name, 0)}>Region</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}>${each(items, ({ Region }) => {
        return `${Region === value ? `<option${add_attribute("value", Region, 0)} selected>${escape(Region)}</option>` : `<option${add_attribute("value", Region, 0)}>${escape(Region)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}`;
});
export {
  CustomerSchema as C,
  CustomerRegions as a
};
