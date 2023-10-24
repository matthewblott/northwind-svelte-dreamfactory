import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, o as each } from "../../../../../../chunks/index3.js";
import { E as Edit } from "../../../../../../chunks/edit.js";
import { P as Pager, a as Plus_square } from "../../../../../../chunks/Pager.js";
import { X as X_square } from "../../../../../../chunks/x-square.js";
import "../../../../../../chunks/order-details.js";
import "../../../../../../chunks/index.js";
import { p as page } from "../../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let count;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const pathname = $page.url.pathname;
  const paths = pathname.split("/").filter((item) => item !== "");
  const orderId = parseInt(paths[1]);
  items = [];
  count = 0;
  $$unsubscribe_page();
  return `<h1>Order Items</h1>

${validate_component(Pager, "Pager").$$render($$result, { limit: 10, count }, {}, {})}
<button>${validate_component(X_square, "XSquare").$$render($$result, {}, {}, {})} Cancel</button>
<table role="${"grid"}"><thead><th scope="${"col"}">Product Id</th>
		<th scope="${"col"}">Product Name </th>
		<th><a href="${"/orders/" + escape(orderId, true) + "/items/new"}">${validate_component(Plus_square, "PlusSquare").$$render($$result, {}, {}, {})}</a></th></thead>
	<tbody>${each(items, ({ OrderId, ProductId, ProductName }) => {
    return `<tr><th scope="${"row"}">${escape(ProductId)}</th>
				<td>${escape(ProductName)}</td>
				<td><a href="${"/orders/" + escape(OrderId, true) + "/items/" + escape(ProductId, true)}">${validate_component(Edit, "Edit").$$render($$result, {}, {}, {})}</a></td>
			</tr>`;
  })}</tbody></table>`;
});
export {
  Page as default
};
