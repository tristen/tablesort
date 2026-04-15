tape('sorts dot separated numbers', function(t) {
  var el = table.querySelector('th:nth-child(6)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test the version column has sorts
  t.equal(table.rows[1].cells[5].innerHTML, '11.0.1');
  t.equal(table.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(table.rows[3].cells[5].innerHTML, '31.0.1650.57');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[5].innerHTML, '31.0.1650.57');
  t.equal(table.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(table.rows[3].cells[5].innerHTML, '11.0.1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[5].innerHTML, '11.0.1');
  t.equal(table.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(table.rows[3].cells[5].innerHTML, '31.0.1650.57');

  t.end();
});

tape('sorts versions with unequal segment counts', function(t) {
  var el = tableSortDotsep.querySelector('th');
  var event = document.createEvent('HTMLEvents');

  // Ascending: 6.7.1 < 6.8 (= 6.8.0) < 6.8.2
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableSortDotsep.rows[1].cells[0].innerHTML, '6.7.1');
  t.equal(tableSortDotsep.rows[2].cells[0].innerHTML, '6.8');
  t.equal(tableSortDotsep.rows[3].cells[0].innerHTML, '6.8.2');

  // Descending: 6.8.2 > 6.8 > 6.7.1
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableSortDotsep.rows[1].cells[0].innerHTML, '6.8.2');
  t.equal(tableSortDotsep.rows[2].cells[0].innerHTML, '6.8');
  t.equal(tableSortDotsep.rows[3].cells[0].innerHTML, '6.7.1');

  t.end();
});
