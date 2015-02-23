tape('sorts dates', function(t) {
  var el = table.querySelector('th:nth-child(2)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that basic numbers sort
  t.equal(table.rows[1].cells[2].innerHTML, '10/11/1969');
  t.equal(table.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(table.rows[3].cells[2].innerHTML, '12-2-70');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[2].innerHTML, '12-2-70');
  t.equal(table.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(table.rows[3].cells[2].innerHTML, '10/11/1969');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[2].innerHTML, '10/11/1969');
  t.equal(table.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(table.rows[3].cells[2].innerHTML, '12-2-70');

  t.end();
});

