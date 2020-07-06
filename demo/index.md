---
layout: default
---

## Quick start

{% highlight html %}<script src='tablesort.min.js'></script>

<!-- Include sort types you need -->
<script src='tablesort.number.js'></script>
<script src='tablesort.date.js'></script>

<script>
  new Tablesort(document.getElementById('table-id'));
</script>{% endhighlight %}

## Sort types

See all available sort types in the [sort directory of the project](https://github.com/tristen/tablesort/tree/gh-pages/src/sorts/). Defaults to string if no sort types are provided.

## Additional options

### Ascending/Descending
You can pass an alternate sort order as a second parameter. By default sort is ascending. To change this, set:

{% highlight js %}new Tablesort(document.getElementById('table-id'), {
  descending: true
});
{% endhighlight %}

<div class='notice'>**Note:** If you are using the default CSS provided you'll need to reverse the class names that style the arrows.</div>

### Exclude columns or rows

For columns or rows that do not require sorting, you can add attribute `data-sort-method='none'` to a columns `th` or a `tr` element.

{% highlight html %}<th data-sort-method='none'>Name</th>

<tr data-sort-method='none'>
  <td>1</td>
  <td>Gonzo the Great</td>
  <td>12-2-70</td>
  <td>Radishes</td>
  <td>$0.63</td>
</tr>
{% endhighlight %}

### Override data that is sorted on

Sometimes text inside cells is not normalized. Using a `data-sort` attribute you can use optional data to sort on.

{% highlight html %}<tr>
  <td>1</td>
  <td data-sort='1357656438'>01/08/13 @ 8:47:18am EST</td>
</tr>
<tr>
  <td>2</td>
  <td data-sort='1078673085'>3/7/2004 @ 9:24:45 EST</td>
</tr>
{% endhighlight %}

You can use a custom attribute (instead of `data-sort`) using the `sortAttribute` option:

{% highlight js %}
var table = document.getElementById('table-id');
var sort = new Tablesort(table, { sortAttribute: 'data-custom-sort-val'});
{% endhighlight %}

### Specify the sort method for a column

By adding a `data-sort-method` attribute to a table heading you can force Tablesort to use a specific sorting method rather than guessing it. The value of `data-sort-method` corresponds to the name of a sort function.

{% highlight html %}<table>
  <thead>
    <tr>
      <th>Number</th>
      <th data-sort-method='dotsep'>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>3.7.2004</td>
    </tr>
    <tr>
      <td>2</td>
      <td>1.08.2013</td>
    </tr>
  </tbody>
</table>
{% endhighlight %}

### Specify which table heading row enables sorting

If you have two or more table heading rows you can specify the one that enables sorting by adding a `data-sort-method='thead'` attribute to desired `<tr>` element.

{% highlight html %}<table>
  <thead>
    <tr data-sort-method='thead'><th>Sort Row</th></tr>
    <tr><th>Not Sort Row</th></tr>
  </thead>
  <tbody>
    <tr><td>2</td></tr>
    <tr><td>1</td></tr>
    <tr><td>3</td></tr>
  </tbody>
</table>
{% endhighlight %}


### Events

Tablesort supports two custom events `beforeSort` & `afterSort`.

{% highlight js %}var table = document.getElementById('table-id');
var sort = new Tablesort(table);

table.addEventListener('beforeSort', function() {
  alert('Table is about to be sorted!');
});

table.addEventListener('afterSort', function() {
  alert('Table sorted!');
});
{% endhighlight %}

<table id='event-table' class='sort'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Born</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Roy Eldridge</td>
      <td>1911</td>
    </tr>
    <tr>
      <td>Tim Hagans</td>
      <td>1954</td>
    </tr>
    <tr>
      <td>Freddie Hubbard</td>
      <td>1938</td>
    </tr>
  </tbody>
</table>

### Refresh sort on appended data

Tablesort supports sorting when new data has been added. Simply call the refresh method.

{% highlight js %}var table = document.getElementById('table-id');
var sort = new Tablesort(table);

// Make some Ajax request to fetch new data and on success:
sort.refresh();
{% endhighlight %}

<table id='refresh-table' class='sort'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Born</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Roy Eldridge</td>
      <td>1911</td>
    </tr>
    <tr>
      <td>Tim Hagans</td>
      <td>1954</td>
    </tr>
    <tr>
      <td>Freddie Hubbard</td>
      <td>1938</td>
    </tr>
  </tbody>
</table>
<a href='#' id='add' class='button'>Append a row</a>
<a href='#' id='remove' class='button'>Remove a row</a>

### Default sort on tablesort initialization
It is possible to automatically sort the table once you create a Tablesort instance by adding `data-sort-default` attribute.

{% highlight html %}<th data-sort-default>Born</th>
{% endhighlight %}

<table id='defaulting' class='sort'>
<thead>
  <tr>
    <th>Name</th>
    <th data-sort-default>Born</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Roy Eldridge</td>
    <td>1911</td>
  </tr>
  <tr>
    <td>Tim Hagans</td>
    <td>1954</td>
  </tr>
  <tr>
    <td>Freddie Hubbard</td>
    <td>1938</td>
  </tr>
</tbody>
</table>

### Sorting by column keys

Sometimes, tables can have more complex column structures, especially when using colspans. In these cases, you can
explicitly connect a header to the cells in each row that it should sort by, by using the `data-sort-column-key`
attribute.

This example sorts products by price, even though the prices are not in the same column as their header.

{% highlight html %}<table class='sort'>
<thead>
  <tr>
    <th >Product</th>
    <th colspan="2" data-sort-column-key="price">Price</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Apples</td>
    <td>Sale!</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Bread</td>
    <td>Out of stock</td>
    <td>10</td>
  </tr>
  <tr>
    <td>Radishes</td>
    <td>In Stock!</td>
    <td>30</td>
  </tr>
</tbody>
</table>
{% endhighlight %}

<table id='column-keys' class='sort'>
<thead>
  <tr>
    <th>Product</th>
    <th colspan="2" data-sort-column-key="price">Price</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Apples</td>
    <td>Sale!</td>
    <td data-sort-column-key="price">20</td>
  </tr>
  <tr>
    <td>Bread</td>
    <td>Out of stock</td>
    <td data-sort-column-key="price">10</td>
  </tr>
  <tr>
    <td>Radishes</td>
    <td>In Stock!</td>
    <td data-sort-column-key="price">30</td>
  </tr>
</tbody>
</table>

## CSS styling

Add the styling from [tablesort.css](../tablesort.css) file to your CSS or roll with your own.

## Licence

MIT

## Bugs?

[File Them](https://github.com/tristen/tablesort/issues)

<script>
  new Tablesort(document.getElementById('defaulting'));
  new Tablesort(document.getElementById('column-keys'));

  var events = document.getElementById('event-table')
  new Tablesort(events);

  addEvent(events, 'beforeSort', function(e) {
    alert('Table is about to be sorted!');
  });
  addEvent(events, 'afterSort', function(e) {
    alert('Table sorted!');
  });

  var trumpeters = [
    {
      "name": "Miles Davis",
      "born": 1926
    },
    {
      "name": "Dizzy Gillespie",
      "born": 1917
    },
    {
      "name": "Wynton Marsalis",
      "born": 1961
    },
    {
      "name": "Tom Harell",
      "born": 1946
    },
    {
      "name": "Roy Hargrove",
      "born": 1969
    },
    {
      "name": "Chet Baker",
      "born": 1929
    },
    {
      "name": "Nicholas Payton",
      "born": 1973
    },
    {
      "name": "Wallace Roney",
      "born": 1960
    },
    {
      "name": "Rex Stewart",
      "born": 1907
    },
    {
      "name": "Tim Hagans",
      "born": 1954
    },
    {
      "name": "Roy Eldridge",
      "born": 1911
    },
    {
      "name": "Freddie Hubbard",
      "born": 1938
    }
  ]
  var r = document.getElementById('refresh-table');
  var add = document.getElementById('add');
  var remove = document.getElementById('remove');
  var refresh = new Tablesort(r);

  function cancel(event) {
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    (event.stopPropagation) ? event.stopPropagation() : event.cancelBubble = true;
  }
  function addEvent(object, event, method) {
      if (object.attachEvent) {
          object['e' + event + method] = method;
          object[event + method] = function(){object['e' + event + method](window.event);};
          object.attachEvent('on' + event, object[event + method]);
      } else {
      object.addEventListener(event, method, false);
      }
  };

  addEvent(add, 'click', function(e) {
    cancel(e);
    var player = trumpeters[Math.floor(Math.random() * trumpeters.length)];

    var rowCount = r.rows.length;
    var row = r.insertRow(rowCount);

    var cellName = row.insertCell(0);
        cellName.innerHTML = player.name;

    var cellBorn = row.insertCell(1);
        cellBorn.innerHTML = player.born;

    refresh.refresh();
  });
  addEvent(remove, 'click', function(e) {
    cancel(e);
    var rowCount = r.rows.length;
    if (rowCount === 2) return;
    r.deleteRow(rowCount - 1);
  });
</script>
