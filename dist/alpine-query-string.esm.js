// src/index.js
var updateQueryParam = (paramName, newValue) => {
  const url = new URL(window.location);
  url.searchParams.set(paramName, newValue);
  window.history.replaceState({}, "", url);
};
function src_default(Alpine) {
  Alpine.directive("query-string", (el, { modifiers, expression }, { evaluate }) => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramName = modifiers[0] || expression;
    const initialValue = urlParams.get(paramName) ?? evaluate(expression);
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
export {
  module_default as default
};
