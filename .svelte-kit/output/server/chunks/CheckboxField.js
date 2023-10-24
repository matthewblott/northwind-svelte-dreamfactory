import { z } from "zod";
import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape, v as validate_component } from "./index3.js";
import "./category.js";
import { V as Validation } from "./Validation.js";
import "./supplier.js";
import { capitalCase } from "change-case";
const ProductSchema = z.object({
  ProductId: z.number(),
  ProductName: z.string().min(2),
  SupplierId: z.coerce.number(),
  CategoryId: z.coerce.number(),
  QuantityPerUnit: z.string(),
  UnitPrice: z.number(),
  UnitsInStock: z.number(),
  UnitsOnOrder: z.number(),
  ReorderLevel: z.number(),
  Discontinued: z.coerce.boolean()
});
const Categories = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Category" } = $$props;
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
	${items ? `<label${add_attribute("for", name, 0)}>Category</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ CategoryId, CategoryName }) => {
        return `${CategoryId === value ? `<option${add_attribute("value", CategoryId, 0)} selected>${escape(CategoryName)}</option>` : `<option${add_attribute("value", CategoryId, 0)}>${escape(CategoryName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const Suppliers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
  let { name = "Supplier" } = $$props;
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
	${items ? `<label${add_attribute("for", name, 0)}>Supplier</label>
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ SupplierId, CompanyName }) => {
        return `${SupplierId === value ? `<option${add_attribute("value", SupplierId, 0)} selected>${escape(CompanyName)}</option>` : `<option${add_attribute("value", SupplierId, 0)}>${escape(CompanyName)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
const CheckboxField = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  let { checked = false } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  return `<label${add_attribute("for", name, 0)}>${escape(capitalCase(name))}</label>
${checked ? `<input type="${"checkbox"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)} checked>` : `<input type="${"checkbox"}"${add_attribute("id", name, 0)}${add_attribute("name", name, 0)}>`}
${validate_component(Validation, "Validation").$$render($$result, { name }, {}, {})}`;
});
export {
  Categories as C,
  ProductSchema as P,
  Suppliers as S,
  CheckboxField as a
};
