import { c as create_ssr_component, v as validate_component, d as createEventDispatcher, e as escape, f as null_to_empty, b as subscribe, h as add_attribute } from "../../../chunks/index3.js";
import { i as isLoggedIn } from "../../../chunks/utils.js";
import { I as Icon } from "../../../chunks/Icon.js";
import "../../../chunks/auth.js";
const Redirect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ``;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "y1": "12",
        "x2": "20",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "y1": "6",
        "x2": "20",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "y1": "18",
        "x2": "20",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const X = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "18",
        "y1": "6",
        "x2": "6",
        "y2": "18"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "y1": "6",
        "x2": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Logout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<a>Logout</a>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media(max-width: 1024px){ul.svelte-n3mvs3{display:none}.display.svelte-n3mvs3{flex-direction:column;display:inline-flex}}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { checked = false } = $$props;
  createEventDispatcher();
  if ($$props.checked === void 0 && $$bindings.checked && checked !== void 0)
    $$bindings.checked(checked);
  $$result.css.add(css$1);
  return `<ul class="${escape(null_to_empty(checked ? "display" : ""), true) + " svelte-n3mvs3"}"><li><a href="${"/home"}">Home</a></li>
	<li><a href="${"/categories"}">Categories</a></li>
	<li><a href="${"/customers"}">Customers</a></li>
	<li><a href="${"/employees"}">Employees</a></li>
	<li><a href="${"/orders"}">Orders</a></li>
	<li><a href="${"/products"}">Products</a></li>
	<li><a href="${"/regions"}">Regions</a></li>
	<li><a href="${"/shippers"}">Shippers</a></li>
	<li><a href="${"/suppliers"}">Suppliers</a></li>
	<li><a href="${"/territories"}">Territories</a></li>
	<li>${validate_component(Logout, "Logout").$$render($$result, {}, {}, {})}</li>
</ul>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1p0y60i.svelte-1p0y60i.svelte-1p0y60i{display:flex;flex-direction:row;place-content:end}nav.svelte-1p0y60i.svelte-1p0y60i.svelte-1p0y60i{margin-right:auto}label.svelte-1p0y60i.svelte-1p0y60i.svelte-1p0y60i{position:absolute;padding:0.75rem;cursor:pointer}.peer.svelte-1p0y60i~label.svelte-1p0y60i>.x.svelte-1p0y60i{display:none}.peer.svelte-1p0y60i:checked~label.svelte-1p0y60i>.menu.svelte-1p0y60i{display:none}.peer.svelte-1p0y60i:checked~label.svelte-1p0y60i>.menu.svelte-1p0y60i{display:none}.peer.svelte-1p0y60i:checked~label.svelte-1p0y60i>.x.svelte-1p0y60i{display:inline-block}@media(min-width: 1024px){.peer.svelte-1p0y60i~label.svelte-1p0y60i>.menu.svelte-1p0y60i{display:none}.peer.svelte-1p0y60i~label.svelte-1p0y60i>.menu.svelte-1p0y60i{display:none}}.peer.svelte-1p0y60i.svelte-1p0y60i.svelte-1p0y60i{display:none}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let $isLoggedIn, $$unsubscribe_isLoggedIn;
  $$unsubscribe_isLoggedIn = subscribe(isLoggedIn, (value) => $isLoggedIn = value);
  $$result.css.add(css);
  checked = false;
  $$unsubscribe_isLoggedIn();
  return `<header class="${"svelte-1p0y60i"}"><input class="${"peer svelte-1p0y60i"}" type="${"checkbox"}" id="${"toggle"}"${add_attribute("checked", checked, 1)}>
	<label for="${"toggle"}" class="${"svelte-1p0y60i"}"><span class="${"menu svelte-1p0y60i"}">${validate_component(Menu, "M").$$render($$result, {}, {}, {})}</span>
		<span class="${"x svelte-1p0y60i"}">${validate_component(X, "X").$$render($$result, {}, {}, {})}</span></label>
	<nav class="${"container svelte-1p0y60i"}">${validate_component(Nav, "Nav").$$render($$result, { checked }, {}, {})}
		</nav></header>
<main class="${"container"}">${!checked ? `${slots.default ? slots.default({}) : ``}` : ``}</main>
${$isLoggedIn ? `${validate_component(Redirect, "Redirect").$$render($$result, {}, {}, {})}` : ``}`;
});
export {
  Layout as default
};
