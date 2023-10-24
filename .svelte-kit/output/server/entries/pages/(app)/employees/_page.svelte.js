import { c as create_ssr_component, v as validate_component, q as is_promise, n as noop, o as each, e as escape } from "../../../../chunks/index3.js";
import { E as Edit } from "../../../../chunks/edit.js";
import { P as Pager, a as Plus_square } from "../../../../chunks/Pager.js";
import "../../../../chunks/employee.js";
import "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let promise;
  let count;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  promise = data;
  count = promise.meta.count;
  return `<h1>Employees</h1>
${validate_component(Pager, "Pager").$$render($$result, { limit: 10, count }, {}, {})}

${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	<p>waiting for the promise to resolve...</p>
`;
    }
    return function(value) {
      return `
	<table role="${"grid"}"><thead><th scope="${"col"}">Id </th>
			<th scope="${"col"}">Name</th>
			<th><a href="${"/employees/new"}">${validate_component(Plus_square, "PlusSquare").$$render($$result, {}, {}, {})}</a></th></thead>
		<tbody>${each(value.resource, ({ EmployeeId, FirstName, LastName }) => {
        return `<tr><td scope="${"row"}">${escape(EmployeeId)}</td>
					<td>${escape(FirstName)} ${escape(LastName)}</td>
					<td><a href="${"/employees/" + escape(EmployeeId, true)}">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})}</a></td>
				</tr>`;
      })}</tbody></table>
`;
    }(__value);
  }(promise)}`;
});
export {
  Page as default
};
