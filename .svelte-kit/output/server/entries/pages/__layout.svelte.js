import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, d as add_attribute, v as validate_component } from "../../chunks/index-8d6f2ec3.js";
import { t as theme, p as page } from "../../chunks/app-a0ebf3a8.js";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.info_tile.svelte-1sg77zl.svelte-1sg77zl{padding:1%;border-radius:10px;overflow:hidden}header.svelte-1sg77zl.svelte-1sg77zl{position:sticky;top:0;z-index:101;width:100%;color:var(--text-secondary);box-sizing:border-box}.heading.svelte-1sg77zl.svelte-1sg77zl{z-index:inherit;position:relative;width:auto;padding-left:2%;height:50px;horiz-align:center;text-align:center;display:flex}.icons.svelte-1sg77zl.svelte-1sg77zl{display:flex;justify-content:center}.icons.svelte-1sg77zl .svelte-1sg77zl{padding:0 1%}.icons.svelte-1sg77zl img.svelte-1sg77zl{cursor:pointer;height:25px}.header_bio.svelte-1sg77zl.svelte-1sg77zl{flex-grow:0.25}.header_links.svelte-1sg77zl.svelte-1sg77zl{flex-grow:1;display:flex;flex-direction:row;column-gap:10px}.heading.svelte-1sg77zl .header_links a.svelte-1sg77zl{display:block;align-self:center;color:var(--text-primary);text-decoration:none;transition:ease-in .15s!important}.heading.svelte-1sg77zl .header_links a.active.svelte-1sg77zl{transition:ease-in-out 0.2s;text-shadow:0.1em 0 0 black;padding-bottom:4px;border-bottom:2px solid var(--color-secondary);color:var(--text-secondary)}.heading.svelte-1sg77zl .header_links a.svelte-1sg77zl:hover:not(.active){transition:background-color 0.3s;color:var(--text-secondary-hover)}.William_George.svelte-1sg77zl.svelte-1sg77zl{padding-bottom:2px}.user_info_container.svelte-1sg77zl.svelte-1sg77zl{padding-top:10px;display:inline-block}.user_info.svelte-1sg77zl.svelte-1sg77zl{transition:ease-in-out 0.3s;display:inline-block;width:90px;height:90px;border-radius:50%;align-items:center;background-repeat:no-repeat;background-position:50% 1%;background-size:cover;background-image:url("static/img/Self_Portrait.jpg");border:2px solid var(--color-secondary)\n    }.user_info.svelte-1sg77zl.svelte-1sg77zl:hover{cursor:pointer;width:100px;height:100px;transition:ease-in-out .2s}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  createEventDispatcher();
  let { current } = $$props;
  if ($$props.current === void 0 && $$bindings.current && current !== void 0)
    $$bindings.current(current);
  $$result.css.add(css$1);
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}"${add_attribute("href", `theme/${$theme}.css`, 0)} data-svelte="svelte-1yjdix9">`, ""}

<header class="${"glass svelte-1sg77zl"}" id="${"header"}"><div class="${"heading svelte-1sg77zl"}"><div><div class="${"header_bio svelte-1sg77zl"}"><div class="${"user_info_container svelte-1sg77zl"}"><div class="${"user_info svelte-1sg77zl"}"></div></div>
                <div class="${"info_tile glass svelte-1sg77zl"}"><div class="${"William_George svelte-1sg77zl"}"><span>William George</span></div>
                    <div class="${"icons svelte-1sg77zl"}"><a href="${"https://linkedin.com/in/william-george1"}" class="${"svelte-1sg77zl"}"><img src="${"static/img/icons/linkedin5.png"}" alt="${"linkedin icon"}" class="${"svelte-1sg77zl"}"></a>
                        <a href="${"https://github.com/wrg17"}" class="${"svelte-1sg77zl"}"><img src="${"static/img/icons/github.png"}" alt="${"github icon"}" class="${"svelte-1sg77zl"}"></a></div></div></div></div>
        <div class="${"header_links svelte-1sg77zl"}"><a id="${"home"}" href="${"/"}" class="${["svelte-1sg77zl", current === "home" ? "active" : ""].join(" ").trim()}">Home</a>
            <a id="${"projects"}" href="${"/projects"}" class="${["svelte-1sg77zl", current === "projects" ? "active" : ""].join(" ").trim()}">Projects</a>
            <a id="${"hobbies"}" href="${"/hobbies"}" class="${["svelte-1sg77zl", current === "hobbies" ? "active" : ""].join(" ").trim()}">Hobbies</a></div></div>

</header>`;
});
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-vg0760{position:relative;//display:inline-block;padding-top:30px;padding-bottom:30px;padding-left:170px;padding-right:170px;z-index:1;color:var(--text-primary)}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let current = null;
  $$result.css.add(css);
  {
    {
      let text = $page.url.pathname;
      console.log(text);
      switch (text) {
        case "/":
          current = "home";
          break;
        case "/hobbies":
          current = "hobbies";
          break;
        case "/projects":
          current = "projects";
          break;
        case "/etc":
          current = "etc";
          break;
        default:
          console.log("unknown page", text);
      }
    }
  }
  {
    {
      let curr_page = $page.url.pathname;
      if (curr_page === "/") {
        current = "home";
      } else {
        current = curr_page.replace("/", "");
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}"${add_attribute("href", `static/theme/${$theme}.css`, 0)} data-svelte="svelte-14agar5">${$$result.title = `<title>William George</title>`, ""}`, ""}

<body>${validate_component(Header, "Header").$$render($$result, { current }, {}, {})}
    
    <div class="${"content svelte-vg0760"}">${slots.default ? slots.default({}) : ``}</div>
</body>`;
});
export { _layout as default };
