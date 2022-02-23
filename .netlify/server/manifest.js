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
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: new Set(["app.css", "favicon.png", "img/Self_Portrait.jpg", "img/dino.png", "img/icons/LinkedIn.png", "img/icons/github.png", "img/icons/github.svg", "img/icons/image2vector (1).svg", "img/icons/linkedin.svg", "img/icons/linkedin1.svg", "img/icons/linkedin2.png", "img/icons/linkedin5.png", "img/icons/linkedin5.svg", "img/ocean.jpeg", "img/svg/back-arrow.svg", "img/what_are_you_doing_here.png", "projects/p1/graph_theory.png", "theme/dark.css", "theme/light.css"]),
  _: {
    mime: { ".css": "text/css", ".png": "image/png", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".jpeg": "image/jpeg" },
    entry: { "file": "start-c2a089f7.js", "js": ["start-c2a089f7.js", "chunks/vendor-469c7b6c.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toModule(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/4.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/5.js"))),
      () => Promise.resolve().then(() => __toModule(require("./nodes/6.js")))
    ],
    routes: [
      {
        type: "page",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/projects\/?$/,
        params: null,
        path: "/projects",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "page",
        pattern: /^\/projects\/project\/p1\/?$/,
        params: null,
        path: "/projects/project/p1",
        shadow: null,
        a: [4, 5],
        b: []
      },
      {
        type: "page",
        pattern: /^\/hobbies\/?$/,
        params: null,
        path: "/hobbies",
        shadow: null,
        a: [0, 6],
        b: [1]
      }
    ]
  }
};
