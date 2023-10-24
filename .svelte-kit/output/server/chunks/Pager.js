import { c as create_ssr_component, v as validate_component, d as createEventDispatcher } from "./index3.js";
import { I as Icon } from "./Icon.js";
const Plus_square = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
        "x1": "12",
        "y1": "8",
        "x2": "12",
        "y2": "16"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "y1": "12",
        "x2": "16",
        "y2": "12"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({ name: "plus-square" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Pager = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let buttons;
  createEventDispatcher();
  let { limit } = $$props;
  let { count } = $$props;
  if ($$props.limit === void 0 && $$bindings.limit && limit !== void 0)
    $$bindings.limit(limit);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  buttons = {
    first: { enabled: false },
    previous: { enabled: false },
    next: { enabled: true },
    last: { enabled: true }
  };
  return `${buttons.first.enabled ? `<button>First</button>` : `<button disabled>First</button>`}
${buttons.previous.enabled ? `<button>Previous</button>` : `<button disabled>Previous</button>`}
${buttons.next.enabled ? `<button>Next</button>` : `<button disabled>Next</button>`}
${buttons.last.enabled ? `<button>Last</button>` : `<button disabled>Last</button>`}`;
});
export {
  Pager as P,
  Plus_square as a
};
