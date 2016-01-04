tablesort
---

A small & simple sorting component for tables written in Javascript.

[![npm version](http://img.shields.io/npm/v/tablesort.svg)](https://npmjs.org/package/tablesort) [![Build Status](https://travis-ci.org/tristen/tablesort.png?Zeqckz55oF1LjKHEqHT7)](https://travis-ci.org/tristen/tablesort)

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

### Browser Support

Tablesort expects `classList` to be supported. For this to work on older versions of IE, use [a shim](https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills#classlist).

| <img src="http://i.imgur.com/dJC1GUv.png" width="48px" height="48px" alt="Chrome logo"> | <img src="http://i.imgur.com/o1m5RcQ.png" width="48px" height="48px" alt="Firefox logo"> | <img src="http://i.imgur.com/8h3iz5H.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="http://i.imgur.com/iQV4nmJ.png" width="48px" height="48px" alt="Opera logo"> | <img src="http://i.imgur.com/j3tgNKJ.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|
| 8+ ✔ | 3.6+ ✔ | 10+ ✔ | 11.50+ ✔ | 5.1+ ✔ |

### Sort Types

See all available sort types in the [sorts](https://github.com/tristen/tablesort/tree/gh-pages/src/sorts/)
directory. Defaults to string if no sort types are provided.

### Additional options

#### Ascending/Descending
You can pass in options as a second parameter. Currently one option is
supported: `descending: true`. By default, sort is set to ascending.

``` js
new Tablesort(document.getElementById('table-id'), {
  descending: true
});
```

To override the sort order of a particular column, a `data-sort-order`
attribute can be added to its `th` element. Accepted values are `asc` for
ascending and `desc` for descending.

``` html
<th data-sort-order='desc'>Name</th>
```

#### Exclude columns or rows
For columns or rows that do not require sorting, you can add a class of
`no-sort` to a columns `th` or a `tr` element.
``` html
<th class='no-sort'>Name</th>

<tr class='no-sort'>
  <td>1</td>
  <td>Gonzo the Great</td>
  <td>12-2-70</td>
  <td>Radishes</td>
  <td>$0.63</td>
</tr>
```

#### Override data that is sorted on
Sometimes text inside cells is not normalized. Using a `data-sort` attribute
you can use optional data to sort on.

``` html
<tr>
  <td>1</td>
  <td data-sort='1357656438'>01/08/13 @ 8:47:18am EST</td>
</tr>
<tr>
  <td>2</td>
  <td data-sort='1078673085'>3/7/2004 @ 9:24:45 EST</td>
</tr>
```

#### Specify the sort method for a column
By adding a `data-sort-method` attribute to a table heading you can force
Tablesort to use a specific sorting method rather than guessing it. The value
of `data-sort-method` corresponds to the name of a sort function.

``` html
<th>Number</th>
<th data-sort-method='dotsep'>Version</th>
<tr>
  <td>1</td>
  <td>1.08.2013</td>
</tr>
<tr>
  <td>2</td>
  <td>3.7.2004</td>
</tr>
```

#### Default sort on tablesort initialization
It is possible to automatically sort the table once you create a Tablesort
instance by adding `sort-default` class.

``` html
<th class='sort-default'>Name</th>
```

#### Events
Tablesort supports two custom events: `beforeSort` & `afterSort`.

``` js
var table = document.getElementById('table-id');
var sort = new Tablesort(table);

table.addEventListener('beforeSort', function() {
  alert('Table is about to be sorted!');
});

table.addEventListener('afterSort', function() {
  alert('Table sorted!');
});
```

#### Refresh sort on appended data
Tablesort supports sorting when new data has been added. Simply call the refresh
method.

``` js
var table = document.getElementById('table-id');
var sort = new Tablesort(table);

// Make some Ajax request to fetch new data and on success:
sort.refresh();
```

[See homepage for example](http://tristen.ca/tablesort/demo/#refresh)

### Node/Browserify

``` js
// npm install tablesort
var tablesort = require('tablesort');

tablesort(el, options);
```

### Ender support
Add `tablesort` as an internal chain method to your [Ender](https://github.com/ender-js/Ender/)
compilation.

``` js
// ender add tablesort

$('.table').tablesort();
```

### Default CSS
Add the styling below to your CSS or roll with your own.

``` css
th.sort-header::-moz-selection { background:transparent; }
th.sort-header::selection      { background:transparent; }
th.sort-header {
  cursor:pointer;
  }
th.sort-header::-moz-selection,
th.sort-header::selection {
  background:transparent;
  }
table th.sort-header:after {
  content:'';
  float:right;
  margin-top:7px;
  border-width:0 4px 4px;
  border-style:solid;
  border-color:#404040 transparent;
  visibility:hidden;
  }
table th.sort-header:hover:after {
  visibility:visible;
  }
table th.sort-up:after,
table th.sort-down:after,
table th.sort-down:hover:after {
  visibility:visible;
  opacity:0.4;
  }
table th.sort-up:after {
  border-bottom:none;
  border-width:4px 4px 0;
  }
```

### Extending Tablesort

If you require a sort operation that does not exist
in the [sorts](https://github.com/tristen/tablesort/tree/gh-pages/src/sorts/)
directory, you can add your own.

``` js
Tablesort.extend('name', function(item) {

  // Regular expression to test against.
  // `item` is a table value to evaluate.
  return /foo/.test(item);
}, function(a, b) {

  // Custom sort functionality goes here.
  // e.g var n = (a > b) ? -1 : 1;
  return n;
});
```

If you've made an extend function that others would benifit from pull requests
are gladly accepted!

### Contributing

Tablesort relies on [Grunt](http://gruntjs.com) as its build tool. Simply run
`grunt` to package code from any contributions you make to `src/tablesort.js`
before submitting pull requests.

Tests are run via:

```sh
npm install && npm test
```

### Licence

MIT

### Bugs?

[Create an issue](https://github.com/tristen/tablesort/issues)
