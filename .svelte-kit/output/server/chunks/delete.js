import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { I as Icon } from "./Icon.js";
const Delete = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"
      }
    ],
    [
      "line",
      {
        "x1": "18",
        "y1": "9",
        "x2": "12",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "12",
        "y1": "9",
        "x2": "18",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "delete" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Delete as D
};
