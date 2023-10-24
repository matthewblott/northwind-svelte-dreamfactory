import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { I as Icon } from "./Icon.js";
const Save = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
      }
    ],
    ["polyline", { "points": "17 21 17 13 7 13 7 21" }],
    ["polyline", { "points": "7 3 7 8 15 8" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "save" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Save as S
};
