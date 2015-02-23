tape('sorts filesize', function(t) {
  var el = table.querySelector('th:nth-child(7)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test the filesize column sorts
  t.equal(table.rows[1].cells[6].innerHTML, '134 B');
  t.equal(table.rows[2].cells[6].innerHTML, '124k');
  t.equal(table.rows[3].cells[6].innerHTML, '134.56 GB');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[6].innerHTML, '134.56 GB');
  t.equal(table.rows[2].cells[6].innerHTML, '124k');
  t.equal(table.rows[3].cells[6].innerHTML, '134 B');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[6].innerHTML, '134 B');
  t.equal(table.rows[2].cells[6].innerHTML, '124k');
  t.equal(table.rows[3].cells[6].innerHTML, '134.56 GB');

  t.end();
});

