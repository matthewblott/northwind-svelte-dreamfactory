import { z } from "zod";
import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape, v as validate_component } from "./index3.js";
import "./customer.js";
import "./shipper.js";
import { V as Validation } from "./Validation.js";
import "./order.js";
import { capitalCase } from "change-case";
const OrderSchema = z.object({
  OrderId: z.number(),
  CustomerId: z.string().min(1).max(5),
  EmployeeId: z.coerce.number().positive(),
  OrderDate: z.coerce.date(),
  RequiredDate: z.coerce.date(),
  ShippedDate: z.coerce.date(),
  ShipVia: z.coerce.number(),
  Freight: z.number(),
  ShipName: z.string(),
  ShipAddress: z.string().max(50),
  ShipCity: z.string().max(15),
  ShipRegion: z.string().max(15),
  ShipPostalCode: z.string().max(9),
  ShipCountry: z.string().max(15)
});
const Customers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Customer" } = $$props;
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
	${items ? `<label${add_attribute("for", name, 0)}>Customer</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ CustomerId, CompanyName }) => {
        return `${CustomerId === value ? `<option${add_attribute("value", CustomerId, 0)} selected>${escape(CompanyName)}</option>` : `<option${add_attribute("value", CustomerId, 0)}>${escape(CompanyName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}`;
});
const Shippers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Shipper" } = $$props;
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
	${items ? `<label${add_attribute("for", name, 0)}>Shipper</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ ShipperId, CompanyName }) => {
        return `${ShipperId === value ? `<option${add_attribute("value", ShipperId, 0)} selected>${escape(CompanyName)}</option>` : `<option${add_attribute("value", ShipperId, 0)}>${escape(CompanyName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const OrderRegions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name } = $$props;
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
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ ShipRegion }) => {
        return `${ShipRegion === value ? `<option${add_attribute("value", ShipRegion, 0)} selected>${escape(ShipRegion)}</option>` : `<option${add_attribute("value", ShipRegion, 0)}>${escape(ShipRegion)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
export {
  Customers as C,
  OrderSchema as O,
  Shippers as S,
  OrderRegions as a
};
