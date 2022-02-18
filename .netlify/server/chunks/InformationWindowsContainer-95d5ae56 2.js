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
  I: () => InformationWindowsContainer
});
var import_index_8d6f2ec3 = __toModule(require("./index-8d6f2ec3.js"));
var InformationWindow_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.window.svelte-kapsux{overflow:hidden;flex-direction:column;cursor:pointer;text-align:center;height:100%;width:100%;padding:0;border-radius:10%;//border:2px solid white;box-sizing:border-box;margin:0}.project-img-style.svelte-kapsux{position:relative;height:70%;width:100%;background-image:url("static/img/ocean.jpeg");opacity:90%;background-size:cover}.project-title-style.svelte-kapsux{position:absolute;margin:auto;top:40%;opacity:100%;color:black}.project-description-style.svelte-kapsux{height:30%;width:100%;overflow:hidden}h1.svelte-kapsux{height:100%;width:100%;margin:0;text-align:center;position:absolute;color:white}.text.svelte-kapsux{position:relative;height:auto;width:auto;margin-top:1%;margin-bottom:5%;margin-left:5%;margin-right:5%;display:block;overflow:hidden;text-overflow:ellipsis;color:white;overflow-wrap:break-word}',
  map: null
};
const InformationWindow = (0, import_index_8d6f2ec3.c)(($$result, $$props, $$bindings, slots) => {
  let { proj_title } = $$props;
  let { proj_img } = $$props;
  let { proj_img_des } = $$props;
  let { proj_des } = $$props;
  let { proj_link } = $$props;
  if ($$props.proj_title === void 0 && $$bindings.proj_title && proj_title !== void 0)
    $$bindings.proj_title(proj_title);
  if ($$props.proj_img === void 0 && $$bindings.proj_img && proj_img !== void 0)
    $$bindings.proj_img(proj_img);
  if ($$props.proj_img_des === void 0 && $$bindings.proj_img_des && proj_img_des !== void 0)
    $$bindings.proj_img_des(proj_img_des);
  if ($$props.proj_des === void 0 && $$bindings.proj_des && proj_des !== void 0)
    $$bindings.proj_des(proj_des);
  if ($$props.proj_link === void 0 && $$bindings.proj_link && proj_link !== void 0)
    $$bindings.proj_link(proj_link);
  $$result.css.add(css$1);
  return `<div class="${"window svelte-kapsux"}"><a${(0, import_index_8d6f2ec3.d)("href", proj_link, 0)}><div class="${"project-img-style svelte-kapsux"}"><h1 class="${"project-title-style svelte-kapsux"}">${(0, import_index_8d6f2ec3.f)(proj_title)}</h1></div>
        <div class="${"project-description-style glass svelte-kapsux"}"><div class="${"text svelte-kapsux"}">${(0, import_index_8d6f2ec3.f)(proj_des)}</div></div></a>
</div>`;
});
var InformationWindowsContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".this.svelte-1lv333l{width:100%}.grid-container.svelte-1lv333l{display:grid;gap:5% 2.5%;grid-template-columns:repeat(3, 1fr);grid-auto-rows:minmax(200px, auto)}.grid-item.svelte-1lv333l:nth-child(11n + 7){grid-column:span 2;border-radius:10px}.grid-item.svelte-1lv333l:nth-child(11n - 10){grid-column:span 2;border-radius:10px}.grid-item.svelte-1lv333l{display:block;overflow:hidden;border-radius:5px}",
  map: null
};
const InformationWindowsContainer = (0, import_index_8d6f2ec3.c)(($$result, $$props, $$bindings, slots) => {
  let content_array = [
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "/projects/project/p1"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqi feOanXJvUsSl TvEEoFIrJAmDcZnt ujhJSpKEJMsHPLUE KpkGznRfZUTqthPg gRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS",
      "https://google.com"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ],
    [
      "TITLE",
      "static/img/ocean.jpeg",
      "dino",
      "eIQPFsrGsFiZqifeOanXJvUsSlTvEEoFIrJAmDcZntujhJSpKEJMsHPLUEKpkGznRfZUTqthPggRUSkncbzTtiYkVgHfdZWxBXAS"
    ]
  ];
  $$result.css.add(css);
  return `<div class="${"this svelte-1lv333l"}"><div class="${"grid-container svelte-1lv333l"}">${(0, import_index_8d6f2ec3.h)(content_array, (content) => {
    return `<div class="${"grid-item svelte-1lv333l"}">${(0, import_index_8d6f2ec3.v)(InformationWindow, "InformationWindow").$$render($$result, {
      proj_title: content[0],
      proj_img: content[1],
      proj_img_des: content[2],
      proj_des: content[3],
      proj_link: content[4]
    }, {}, {})}
                
            </div>`;
  })}</div>
</div>`;
});
