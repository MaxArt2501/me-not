me-not
======

Simple module to require modules without always using `require`.

It's a *concept* library that currently does *not* work in node.js or io.js. Not until [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) will be implemented.

## Usage

Instead of

```js
var fs = require("fs"),
    path = require("path"),
    _ = require("underscore);

fs.readFile(path.resolve(...));
```

```js
var R = require("me-not"),
    _ = R.underscore;

R.fs.readFile(R.path.resolve(...));
```

That's it. It just saves some typing. It can be used to require files with a path:

```js
var module = R["./lib/module"];
```

Using `delete` unloads a module from cache:

```js
delete R.underscore;
```

## License.

MIT. See [LICENSE](license).