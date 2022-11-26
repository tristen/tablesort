tape('modeButton - sorts filesize', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(7)').firstChild;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test the filesize column sorts
  t.equal(modeBtnTable.rows[1].cells[6].innerHTML, '134 B');
  t.equal(modeBtnTable.rows[2].cells[6].innerHTML, '124k');
  t.equal(modeBtnTable.rows[3].cells[6].innerHTML, '134.56 GB');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[6].innerHTML, '134.56 GB');
  t.equal(modeBtnTable.rows[2].cells[6].innerHTML, '124k');
  t.equal(modeBtnTable.rows[3].cells[6].innerHTML, '134 B');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[6].innerHTML, '134 B');
  t.equal(modeBtnTable.rows[2].cells[6].innerHTML, '124k');
  t.equal(modeBtnTable.rows[3].cells[6].innerHTML, '134.56 GB');

  t.end();
});

