tape('sorts insensitive', function(t) {
  var el = table.querySelector('th:nth-child(8)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that more than one table cell is evaluated
  // to determine sort type.
  t.equal(table.rows[1].cells[7].innerHTML, '1');
  t.equal(table.rows[2].cells[7].innerHTML, 'A');
  t.equal(table.rows[3].cells[7].innerHTML, 'B');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[7].innerHTML, 'B');
  t.equal(table.rows[2].cells[7].innerHTML, 'A');
  t.equal(table.rows[3].cells[7].innerHTML, '1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[7].innerHTML, '1');
  t.equal(table.rows[2].cells[7].innerHTML, 'A');
  t.equal(table.rows[3].cells[7].innerHTML, 'B');

  t.end();
});

tape('uses data-sort', function(t) {
  var el = table.querySelector('th:nth-child(9)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that more than one table cell is evaluated
  // to determine sort type.
  t.equal(table.rows[1].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');
  t.equal(table.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(table.rows[3].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');
  t.equal(table.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(table.rows[3].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');
  t.equal(table.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(table.rows[3].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');

  t.end();
});

tape('uses data-sort-order', function(t) {
  // Ascending table, descending column.
  var el1 = table.querySelector('th:nth-child(11)');
  // Descending table, ascending column.
  var el2 = tableDescend.querySelector('th:nth-child(2)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el1.dispatchEvent(event);

  t.equal(table.rows[1].cells[0].innerHTML, '1');
  t.equal(table.rows[2].cells[0].innerHTML, '2');
  t.equal(table.rows[3].cells[0].innerHTML, '3');

  event.initEvent('click', true, false);
  el1.dispatchEvent(event);

  t.equal(table.rows[1].cells[0].innerHTML, '3');
  t.equal(table.rows[2].cells[0].innerHTML, '2');
  t.equal(table.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el2.dispatchEvent(event);

  t.equal(tableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(tableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(tableDescend.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el2.dispatchEvent(event);

  t.equal(tableDescend.rows[1].cells[0].innerHTML, '1');
  t.equal(tableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(tableDescend.rows[3].cells[0].innerHTML, '3');

  t.end();
});

tape('sorts descending', function(t) {
  var el = tableDescend.querySelector('th:nth-child(1)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(tableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(tableDescend.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableDescend.rows[1].cells[0].innerHTML, '1');
  t.equal(tableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(tableDescend.rows[3].cells[0].innerHTML, '3');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(tableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(tableDescend.rows[3].cells[0].innerHTML, '1');

  t.end();
});

tape('sorts with exclusion', function(t) {
  var colA = tableExclude.querySelector('th:nth-child(1)');
  var colB = tableExclude.querySelector('th:nth-child(2)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  colA.dispatchEvent(event);

  t.equal(tableExclude.rows[1].cells[0].innerHTML, '2', 'row does not change');
  t.equal(tableExclude.rows[2].cells[0].innerHTML, '1', 'row does not change');
  t.equal(tableExclude.rows[3].cells[0].innerHTML, '3', 'row does not change');

  event.initEvent('click', true, false);
  colB.dispatchEvent(event);

  t.equal(tableExclude.rows[1].cells[0].innerHTML, '2', 'row does not change');
  t.equal(tableExclude.rows[2].cells[0].innerHTML, '1', 'row remains fixed');
  t.equal(tableExclude.rows[3].cells[0].innerHTML, '3', 'row does not change');

  event.initEvent('click', true, false);
  colB.dispatchEvent(event);

  t.equal(tableExclude.rows[1].cells[0].innerHTML, '3', 'row sorts');
  t.equal(tableExclude.rows[2].cells[0].innerHTML, '1', 'row remains fixed');
  t.equal(tableExclude.rows[3].cells[0].innerHTML, '2', 'row sorts');

  t.end();
});

tape('sorts on initialization', function(t) {
  t.equal(tableDefault.rows[1].cells[0].innerHTML, '1', 'was 2');
  t.equal(tableDefault.rows[2].cells[0].innerHTML, '2', 'was 1');
  t.equal(tableDefault.rows[3].cells[0].innerHTML, '3', 'was 3');

  t.end();
});

tape('Appended row is sorted on refresh', function(t) {
  t.equal(tableRefresh.rows[1].cells[0].innerHTML, '0');
  t.equal(tableRefresh.rows[2].cells[0].innerHTML, '1');
  t.equal(tableRefresh.rows[3].cells[0].innerHTML, '2');
  t.equal(tableRefresh.rows[4].cells[0].innerHTML, '3');

  t.end();
});

tape('sort row is first', function(t) {
  t.equal(tableSortRowSet.querySelector("[role=columnheader]").innerHTML, 'Sort Row');
  t.end();
});

tape('sort row is last', function(t) {
  t.equal(tableSortRowAuto.querySelector("[role=columnheader]").innerHTML, 'Sort Row');
  t.end();
});

tape('sorts with column keys', function(t) {
  console.log(tableSortColumnKeys.rows[0].cells[0].innerHTML);
  var el = tableSortColumnKeys.querySelector('th:nth-child(2)');
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableSortColumnKeys.rows[1].cells[1].innerHTML, '1', 'was 1');
  t.equal(tableSortColumnKeys.rows[2].cells[1].innerHTML, '2', 'was 2');
  t.equal(tableSortColumnKeys.rows[3].cells[1].innerHTML, '3', 'was 3');
  t.end();
})
