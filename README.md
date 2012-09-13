# tablesort.js

Tablesort is a small and simple sorting component for tables written in Javascript. It has no dependencies and should have no interference with other libraries.

## Basic usage

``` html
<script src='tablesort.min.js'></script>
<script>
  new Tablesort(document.getElementById('table-id'));
</script>
```

## Additional options
You can pass in options as a second parameter. Currently one option is supported: `descending: true`. By default, sort is set to ascending.

``` html
new Tablesort(document.getElementById('table-id'), {
  descending: true
});
```

## Features

* Sort strings
* Sort numbers
* Sort currency 

## Ender support

Add `tablesort` as an internal chain method to your [Ender](http://ender.no.de) compilation.

    $ ender add tablesort

Use it:

``` js
$('.table').tablesort();
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
  - Column exclusion
  - EventListener to rebuild the table.
