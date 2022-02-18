var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  default: () => _layout_reset
});
var import_index_8d6f2ec3 = __toModule(require("../../../../chunks/index-8d6f2ec3.js"));
var import_app_a0ebf3a8 = __toModule(require("../../../../chunks/app-a0ebf3a8.js"));
var __layout_reset_svelte_svelte_type_style_lang = "";
const css = {
  code: 'body.svelte-10z42sj.svelte-10z42sj{display:flex;flex-direction:column}.tile.svelte-10z42sj.svelte-10z42sj{border-radius:10px;margin:30px;width:auto}.banner.svelte-10z42sj.svelte-10z42sj{position:sticky;top:0;overflow:hidden;display:flex;height:100px;background-size:cover;padding-left:30px;padding-right:30px;background-color:slateblue}.banner-back.svelte-10z42sj.svelte-10z42sj{position:absolute;content:"";height:50px;width:50px;top:25%}.banner-title.svelte-10z42sj.svelte-10z42sj{padding:10px;border-radius:10px;background-color:white;margin:auto;justify-content:center}.proof-links.svelte-10z42sj.svelte-10z42sj{display:flex;flex-direction:column}',
  map: null
};
const title = "HOWDY";
const _layout_reset = (0, import_index_8d6f2ec3.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_page = (0, import_index_8d6f2ec3.a)(import_app_a0ebf3a8.p, (value) => $page = value);
  $$unsubscribe_theme = (0, import_index_8d6f2ec3.a)(import_app_a0ebf3a8.t, (value) => $theme = value);
  $$result.css.add(css);
  {
    {
      let text = $page.url.pathname;
      console.log(text);
      switch (text) {
        case "/":
          break;
        case "/hobbies":
          break;
        case "/projects":
          break;
        case "/etc":
          break;
        default:
          console.log("unknown page", text);
      }
    }
  }
  {
    {
      let curr_page = $page.url.pathname;
      if (curr_page === "/")
        ;
      else {
        curr_page.replace("/", "");
      }
    }
  }
  $$unsubscribe_page();
  $$unsubscribe_theme();
  return `${$$result.head += `<link rel="${"stylesheet"}"${(0, import_index_8d6f2ec3.d)("href", `/static/theme/${$theme}.css`, 0)} data-svelte="svelte-1rgg590">${$$result.title = `<title>William George</title>`, ""}`, ""}

<body class="${"svelte-10z42sj"}">

    <div class="${"tile glass banner svelte-10z42sj"}"><a href="${"/projects"}" class="${"svelte-10z42sj"}"><svg class="${"banner-back svelte-10z42sj"}" id="${"Layer_1"}" data-name="${"Layer 1"}" xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 122.88 108.06"}"><title>back-arrow</title><path d="${"M63.94,24.28a14.28,14.28,0,0,0-20.36-20L4.1,44.42a14.27,14.27,0,0,0,0,20l38.69,39.35a14.27,14.27,0,0,0,20.35-20L48.06,68.41l60.66-.29a14.27,14.27,0,1,0-.23-28.54l-59.85.28,15.3-15.58Z"}"></path></svg></a>
        <div class="${"banner-title svelte-10z42sj"}">${(0, import_index_8d6f2ec3.f)(title)}</div></div>

    <div class="${"tile glass svelte-10z42sj"}"><h1>Description:</h1>
        <span>This is a description</span></div>

    <div class="${"tile glass svelte-10z42sj"}"><h1>Graph of Function Relations:</h1>
        <img src="${"/static/projects/p1/graph_theory.png"}"></div>

    <div class="${"tile glass proof-links svelte-10z42sj"}"><h1>Links to Associated Proofs:</h1>
        <a href="${"https://google.com"}">I am a link to google
        </a>
        <a href="${"https://yahoo.com"}">I am a link to yahoo
        </a></div>
</body>`;
});
