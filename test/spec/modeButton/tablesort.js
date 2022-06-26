tape('modeButton - sorts insensitive', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(8)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that more than one table cell is evaluated
  // to determine sort type.
  t.equal(modeBtnTable.rows[1].cells[7].innerHTML, '1');
  t.equal(modeBtnTable.rows[2].cells[7].innerHTML, 'A');
  t.equal(modeBtnTable.rows[3].cells[7].innerHTML, 'B');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[7].innerHTML, 'B');
  t.equal(modeBtnTable.rows[2].cells[7].innerHTML, 'A');
  t.equal(modeBtnTable.rows[3].cells[7].innerHTML, '1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[7].innerHTML, '1');
  t.equal(modeBtnTable.rows[2].cells[7].innerHTML, 'A');
  t.equal(modeBtnTable.rows[3].cells[7].innerHTML, 'B');

  t.end();
});

tape('modeButton - uses data-sort', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(9)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that more than one table cell is evaluated
  // to determine sort type.
  t.equal(modeBtnTable.rows[1].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');
  t.equal(modeBtnTable.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(modeBtnTable.rows[3].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');
  t.equal(modeBtnTable.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(modeBtnTable.rows[3].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[8].innerHTML, '2', 'cell is 2 but data-sort is a');
  t.equal(modeBtnTable.rows[2].cells[8].innerHTML, '3', 'cell is 3 but data-sort is b');
  t.equal(modeBtnTable.rows[3].cells[8].innerHTML, '1', 'cell is 1 but data-sort is c');

  t.end();
});

tape('modeButton - uses data-sort-order', function(t) {
  // Ascending table, descending column.
  var el1 = modeBtnTable.querySelector('th:nth-child(11)').firstChild;
  // Descending table, ascending column.
  var el2 = modeBtnTableDescend.querySelector('th:nth-child(2)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el1.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[0].innerHTML, '1');
  t.equal(modeBtnTable.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTable.rows[3].cells[0].innerHTML, '3');

  event.initEvent('click', true, false);
  el1.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTable.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTable.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el2.dispatchEvent(event);

  t.equal(modeBtnTableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableDescend.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el2.dispatchEvent(event);

  t.equal(modeBtnTableDescend.rows[1].cells[0].innerHTML, '1');
  t.equal(modeBtnTableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableDescend.rows[3].cells[0].innerHTML, '3');

  t.end();
});

tape('modeButton - sorts descending', function(t) {
  var el = modeBtnTableDescend.querySelector('th:nth-child(1)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableDescend.rows[3].cells[0].innerHTML, '1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableDescend.rows[1].cells[0].innerHTML, '1');
  t.equal(modeBtnTableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableDescend.rows[3].cells[0].innerHTML, '3');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableDescend.rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTableDescend.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableDescend.rows[3].cells[0].innerHTML, '1');

  t.end();
});

tape('modeButton - sorts with exclusion', function(t) {
  var colA = modeBtnTableExclude.querySelector('th:nth-child(1)').firstChild;
  var colB = modeBtnTableExclude.querySelector('th:nth-child(2)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  colA.dispatchEvent(event);

  t.equal(modeBtnTableExclude.rows[1].cells[0].innerHTML, '2', 'row does not change');
  t.equal(modeBtnTableExclude.rows[2].cells[0].innerHTML, '1', 'row does not change');
  t.equal(modeBtnTableExclude.rows[3].cells[0].innerHTML, '3', 'row does not change');

  event.initEvent('click', true, false);
  colB.dispatchEvent(event);

  t.equal(modeBtnTableExclude.rows[1].cells[0].innerHTML, '2', 'row does not change');
  t.equal(modeBtnTableExclude.rows[2].cells[0].innerHTML, '1', 'row remains fixed');
  t.equal(modeBtnTableExclude.rows[3].cells[0].innerHTML, '3', 'row does not change');

  event.initEvent('click', true, false);
  colB.dispatchEvent(event);

  t.equal(modeBtnTableExclude.rows[1].cells[0].innerHTML, '3', 'row sorts');
  t.equal(modeBtnTableExclude.rows[2].cells[0].innerHTML, '1', 'row remains fixed');
  t.equal(modeBtnTableExclude.rows[3].cells[0].innerHTML, '2', 'row sorts');

  t.end();
});

tape('modeButton - sorts on initialization', function(t) {
  t.equal(modeBtnTableDefault.rows[1].cells[0].innerHTML, '1', 'was 2');
  t.equal(modeBtnTableDefault.rows[2].cells[0].innerHTML, '2', 'was 1');
  t.equal(modeBtnTableDefault.rows[3].cells[0].innerHTML, '3', 'was 3');

  t.end();
});

tape('modeButton - Appended row is sorted on refresh', function(t) {
  t.equal(modeBtnTableRefresh.rows[1].cells[0].innerHTML, '0');
  t.equal(modeBtnTableRefresh.rows[2].cells[0].innerHTML, '1');
  t.equal(modeBtnTableRefresh.rows[3].cells[0].innerHTML, '2');
  t.equal(modeBtnTableRefresh.rows[4].cells[0].innerHTML, '3');

  t.end();
});

tape('modeButton - sort row is first', function(t) {
  t.equal(modeBtnTableSortRowSet.querySelector("[role=columnheader]").innerHTML, '<button>Sort Row</button>');
  t.end();
});

tape('modeButton - sort row is last', function(t) {
  t.equal(modeBtnTableSortRowAuto.querySelector("[role=columnheader]").innerHTML, '<button>Sort Row</button>');
  t.end();
});

tape('modeButton - sorts with column keys', function(t) {
  console.log(modeBtnTableSortColumnKeys.rows[0].cells[0].innerHTML);
  var el = modeBtnTableSortColumnKeys.querySelector('th:nth-child(2)').firstChild;
  var event = document.createEvent('HTMLEvents');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableSortColumnKeys.rows[1].cells[1].innerHTML, '1', 'was 1');
  t.equal(modeBtnTableSortColumnKeys.rows[2].cells[1].innerHTML, '2', 'was 2');
  t.equal(modeBtnTableSortColumnKeys.rows[3].cells[1].innerHTML, '3', 'was 3');
  t.end();
})

tape('modeButton - uses custom sort attribute', function(t) {
  var tbl = modeBtnTableSortCustomAttr;
  var h = tbl.querySelector('th').firstChild;

  var clickEvent = document.createEvent('HTMLEvents');
  clickEvent.initEvent('click', true, false);
  h.dispatchEvent(clickEvent);

  t.equal(tbl.rows[1].cells[0].innerHTML, 'Black Widow (Natasha Romanoff)');
  t.equal(tbl.rows[2].cells[0].innerHTML, 'Spider-Man (Peter Parker)');
  t.equal(tbl.rows[3].cells[0].innerHTML, 'Captain America (Steve Rogers)');
  t.equal(tbl.rows[4].cells[0].innerHTML, 'Iron Man (Tony Stark)');
  t.end();
})