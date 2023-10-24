import { c as create_ssr_component } from "../../../chunks/index3.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="${"container"}">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
