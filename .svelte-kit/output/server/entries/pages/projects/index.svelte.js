import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-8d6f2ec3.js";
import { I as InformationWindowsContainer } from "../../../chunks/InformationWindowsContainer-95d5ae56.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(min-width: 640px){}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<section>${validate_component(InformationWindowsContainer, "InformationWindowsContainer").$$render($$result, { class: "windows" }, {}, {})}
</section>`;
});
export { Projects as default };
