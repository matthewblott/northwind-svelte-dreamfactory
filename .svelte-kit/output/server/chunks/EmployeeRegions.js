import { z } from "zod";
import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape } from "./index3.js";
import "./employee.js";
const EmployeeSchema = z.object({
  EmployeeId: z.number(),
  LastName: z.string(),
  FirstName: z.string(),
  Title: z.string(),
  TitleOfCourtesy: z.string(),
  BirthDate: z.coerce.date(),
  HireDate: z.coerce.date(),
  Address: z.string().max(50),
  City: z.string().max(15),
  Region: z.string().max(15),
  PostalCode: z.string().max(9),
  Country: z.string().max(15),
  HomePhone: z.string().min(1).max(15),
  Extension: z.coerce.number(),
  Photo: z.any(),
  Notes: z.string(),
  ReportsTo: z.coerce.number(),
  PhotoPath: z.string()
});
const EmployeeRegions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ Region }) => {
        return `${Region === value ? `<option${add_attribute("value", Region, 0)} selected>${escape(Region)}</option>` : `<option${add_attribute("value", Region, 0)}>${escape(Region)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}`;
});
export {
  EmployeeSchema as E,
  EmployeeRegions as a
};
