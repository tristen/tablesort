tape('sorts monthname', function(t) {
  var el = table.querySelector('th:nth-child(10)');

  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[9].innerHTML, 'January');
  t.equal(table.rows[2].cells[9].innerHTML, 'February');
  t.equal(table.rows[3].cells[9].innerHTML, 'April');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[9].innerHTML, 'April');
  t.equal(table.rows[2].cells[9].innerHTML, 'February');
  t.equal(table.rows[3].cells[9].innerHTML, 'January');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[9].innerHTML, 'January');
  t.equal(table.rows[2].cells[9].innerHTML, 'February');
  t.equal(table.rows[3].cells[9].innerHTML, 'April');

  t.end();
});

