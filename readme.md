me-not
======

Simple module to require modules without always using `require`.

It's a *concept* library that uses [`Proxy`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to avoid the annoyance to `require` modules.

You should probably use ES2015 modules by now, but sometimes it's nice to get things just when you need them.

**Note:** this module does *not* play nicely with Node REPL. It throws a bunch of errors because it tries to call `inspect`, `valueOf` and those sort of methods. But the module is there and it works.

Node.js 6.x and newer is needed for this to work.

## Usage

Instead of

```js
const fs = require("fs");
const path = require("path");
const _ = require("underscore");

fs.readFile(path.resolve(...));
```

you can do

```js
const R = require("me-not"); // require-me-not... get it? ... Plz I know...
const _ = R.underscore;

R.fs.readFile(R.path.resolve(...));
```

That's it. It just saves some typing. It can be used to require files with a path:

```js
const module = R["./lib/module"];
```

Using `delete` unloads a module from `require`'s cache:

```js
delete R.underscore;
```

## License.

MIT. See [LICENSE](LICENSE).
