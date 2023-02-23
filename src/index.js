const updateQueryParam = (paramName, newValue) => {
  const url = new URL(window.location)
  url.searchParams.set(paramName, newValue);
  window.history.replaceState({}, '', url);
};

export default function (Alpine) {
  Alpine.directive('query-string', (el, { modifiers, expression }, { evaluate }) => {
    const urlParams = new URLSearchParams(window.location.search)

    const paramName = modifiers[0] || expression;
    const initialValue = urlParams.get(paramName) ?? evaluate(expression);

    Alpine.bind(el, {
      'x-data'() {
        return {
          init() {
            this.selected = initialValue
            this.$watch(expression, (value) => {
              updateQueryParam(paramName, value)
            })
          },
        }
      },
    })
  })
}
