# Query String Binding for AlpineJS

<p align="center">
    :construction: :construction_worker: :warning: <b>This is a work in progress.</b> :warning: :construction_worker: :construction:
</p>

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
  <!--  -->
</div>
```

## Credits

- [Oliver Lumby](https://github.com/olumby)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
