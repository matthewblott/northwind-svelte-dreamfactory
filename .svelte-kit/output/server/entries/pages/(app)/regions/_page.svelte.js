import { c as create_ssr_component, q as is_promise, n as noop, v as validate_component, o as each, e as escape } from "../../../../chunks/index3.js";
import "../../../../chunks/region.js";
import { E as Edit } from "../../../../chunks/edit.js";
import { P as Pager, a as Plus_square } from "../../../../chunks/Pager.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let promise = Promise.resolve([]);
  items = [];
  return `<h1>Regions</h1>

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>Loading ...</p>
`;
    }
    return function() {
      return `
	${items ? `${validate_component(Pager, "Pager").$$render($$result, {}, {}, {})}
		<table role="${"grid"}"><thead><th scope="${"col"}">Id </th>
				<th scope="${"col"}">Description</th>
				<th><a href="${"#"}" disabled>${validate_component(Plus_square, "PlusSquare").$$render($$result, {}, {}, {})}</a></th></thead>
			<tbody>${each(items, ({ RegionId, RegionDescription }) => {
        return `<tr><th scope="${"row"}">${escape(RegionId)}</th>
						<td>${escape(RegionDescription)}</td>
						<td><a href="${"/regions/" + escape(RegionId, true)}">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})}</a></td>
					</tr>`;
      })}</tbody></table>` : ``}
`;
    }();
  }(promise)}`;
});
export {
  Page as default
};
