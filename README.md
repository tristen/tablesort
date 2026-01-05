tablesort
---

A small & simple sorting component for tables written in JavaScript

[![Build Status](https://app.travis-ci.com/tripu/tablesort.svg?branch=master)](https://app.travis-ci.com/tripu/tablesort)
[![npm version](http://img.shields.io/npm/v/tablesort.svg)](https://npmjs.org/package/tablesort)

### Quick start

``` html
<script src='tablesort.min.js'></script>

<!-- Include sort types you need -->
<script src='tablesort.number.js'></script>
<script src='tablesort.date.js'></script>

<script>
  new Tablesort(document.getElementById('table-id'));
</script>
```

**[See usage and demos for more](http://tristen.ca/tablesort/demo/)**

---

### Browser Support

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 8+ ✔ | 3.6+ ✔ | 10+ ✔ | 11.50+ ✔ | 5.1+ ✔ |

### Node/Browserify

``` js
import tablesort from 'tablesort';

tablesort(el, options);
```

### Default CSS
Add the styling from [tablesort.css](tablesort.css) file to your CSS or roll with your own.


### Extending Tablesort

If you require a sort operation that does not exist
in the [sorts](https://github.com/tristen/tablesort/tree/gh-pages/src/sorts/)
directory, you can add your own.

``` js
Tablesort.extend('name', item => {

  // Regular expression to test against.
  // `item` is a table value to evaluate.
  return /foo/.test(item);
}, (a, b) => {

  // Custom sort functionality goes here.
  // e.g var n = (a > b) ? -1 : 1;
  return n;
});
```

If you've made an extend function that others would benefit from pull requests
are gladly accepted!

### Contributing
Dependencies: Node.js 22.

Tablesort relies on [Grunt](http://gruntjs.com) as its build tool. Simply run
`npm run build` to package code from any contributions you make to `src/tablesort.js`
before submitting pull requests.

Tests are run via:

```sh
npm test
```

Running the demo locally

```sh
jekyll serve
```

Then open http://localhost:4000/demo/ (or whatever port it uses).

### Licence

MIT

### Bugs?

[Create an issue](https://github.com/tristen/tablesort/issues)
