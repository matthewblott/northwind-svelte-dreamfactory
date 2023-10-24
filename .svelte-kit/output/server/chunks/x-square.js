import { c as create_ssr_component, v as validate_component } from "./index3.js";
import { I as Icon } from "./Icon.js";
const X_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "x": "3",
        "y": "3",
        "width": "18",
        "height": "18",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "line",
      {
        "x1": "9",
        "y1": "9",
        "x2": "15",
        "y2": "15"
      }
    ],
    [
      "line",
      {
        "x1": "15",
        "y1": "9",
        "x2": "9",
        "y2": "15"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "x-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  X_square as X
};
