# tablesort.js

Tablesort is a small and simple sorting component for tables written in Javascript. It has no dependencies and should have no interference with other libraries.

## Basic usage

``` html
<script src='tablesort.min.js'></script>
<script>
  new Tablesort(document.getElementById('table-id'));
</script>
```
## Features

* Sort strings
* Sort numbers
* Sort currency

## Additional options

__1. Ascending/Descending__
You can pass in options as a second parameter. Currently one option is supported: `descending: true`. By default, sort is set to ascending.

``` html
new Tablesort(document.getElementById('table-id'), {
  descending: true
});
```

__2. Exclude columns__
For columns that do not require sorting, you can add a class of `no-sort`
``` html
<th class='no-sort'>Name</th>
```

## Ender support

Add `tablesort` as an internal chain method to your [Ender](http://ender.no.de) compilation.

    $ ender add tablesort

Use it:

``` js
$('.table').tablesort();
```

## Default style
Add the styling below to your CSS or roll with your own.

``` css
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
  border-width:4px 4px 0;
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
  border-width:0 4px 4px;
  }
```

## Building

Developers can rebuild the minified library by running:

``` bash
  npm install --dev
  make
```

## TODOs

* Tests
* Sort on date
* Pass in an options object to:
  - Choose which row to begin sorting on.
  - EventListener to rebuild the table.
