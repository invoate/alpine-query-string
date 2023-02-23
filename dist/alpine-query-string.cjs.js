var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// builds/module.js
var module_exports = {};
__export(module_exports, {
  default: () => module_default
});
module.exports = __toCommonJS(module_exports);

// src/index.js
var updateQueryParam = (paramName, newValue) => {
  const url = new URL(window.location);
  url.searchParams.set(paramName, newValue);
  window.history.replaceState({}, "", url);
};
function src_default(Alpine) {
  Alpine.directive("query-string", (el, { modifiers, expression }, { evaluate }) => {
    var _a;
    const urlParams = new URLSearchParams(window.location.search);
    const paramName = modifiers[0] || expression;
    const initialValue = (_a = urlParams.get(paramName)) != null ? _a : evaluate(expression);
    Alpine.bind(el, {
      "x-data"() {
        return {
          init() {
            this.selected = initialValue;
            this.$watch(expression, (value) => {
              updateQueryParam(paramName, value);
            });
          }
        };
      }
    });
  });
}

// builds/module.js
var module_default = src_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
