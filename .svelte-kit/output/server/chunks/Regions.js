import { z } from "zod";
import { c as create_ssr_component, q as is_promise, n as noop, h as add_attribute, o as each, e as escape } from "./index3.js";
import "./region.js";
const TerritorySchema = z.object({
  TerritoryId: z.number(),
  TerritoryDescription: z.string().min(2).max(20),
  RegionId: z.coerce.number().positive()
});
const Regions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise = Promise.resolve();
  let { value } = $$props;
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
		<select${add_attribute("name", name, 0)}${add_attribute("id", name, 0)}><option value="${""}"></option>${each(items, ({ RegionId, RegionDescription }) => {
        return `${RegionId === value ? `<option${add_attribute("value", RegionId, 0)} selected>${escape(RegionDescription)}</option>` : `<option${add_attribute("value", RegionId, 0)}>${escape(RegionDescription)}</option>`}`;
      })}</select>` : ``}
`;
    }();
  }(promise)}`;
});
export {
  Regions as R,
  TerritorySchema as T
};
