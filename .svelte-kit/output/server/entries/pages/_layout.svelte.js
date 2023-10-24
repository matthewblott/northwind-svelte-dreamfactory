import { c as create_ssr_component, e as escape } from "../../chunks/index3.js";
import "capacitor-plugin-safe-area";
const pico_min = "";
const app = "";
let title = "Home";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let height;
  height = 0;
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""}
<div style="${"height: " + escape(height, true) + "px"}"></div>
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
