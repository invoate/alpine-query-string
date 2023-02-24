# Query String Binding for AlpineJS

[![Latest Version on NPM](https://img.shields.io/npm/v/@invoate/alpine-query-string?style=flat-square)](https://www.npmjs.com/package/@invoate/alpine-query-string)
[![Total Downloads](https://img.shields.io/npm/dt/@invoate/alpine-query-string?style=flat-square)](https://www.npmjs.com/package/@invoate/alpine-query-string)

This is a simple plugin for [AlpineJS](https://alpinejs.dev) that binds a property to a specified url query parameter.

## Installation

You can install this package via NPM:

```shell
npm install @invoate/alpine-query-string
```

or by CDN:

```html
<!-- Plugin -->
<script src="https://unpkg.com/@invoate/alpine-query-string/dist/alpine-query-string.min.js" defer></script>
<!-- AlpineJS -->
<script src="https://unpkg.com/alpinejs/dist/cdn.min.js" defer></script>
```

### Setup

First you must register the plugin with Alpine.

```js
import Alpine from "alpinejs"
import queryString from "@invoate/alpine-query-string"

Alpine.plugin(queryString)

Alpine.start()
```
### Usage

In your views, you can now use the x-query-string directive.

```html
<div x-data="{ selected: 'option' }" x-query-string.param="selected">
  <!-- When `selected` changes ?param=value will be appended to the url -->
  <!-- Visiting this page with ?param=value will set `selected` to `value` -->
</div>
```

When the first modifier is not set the parameter name will default to the name of the property

```html
<div x-data="{ selected: 'option' }" x-query-string="selected">
  <!-- ?selected=value will be appended to the url -->
</div>
```

## Credits

- [Oliver Lumby](https://github.com/olumby)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
