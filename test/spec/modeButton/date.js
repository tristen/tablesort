tape('modeButton - sorts dates', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(2)').firstChild;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test that basic numbers sort
  t.equal(modeBtnTable.rows[1].cells[2].innerHTML, '10/11/1969');
  t.equal(modeBtnTable.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(modeBtnTable.rows[3].cells[2].innerHTML, '12-2-70');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[2].innerHTML, '12-2-70');
  t.equal(modeBtnTable.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(modeBtnTable.rows[3].cells[2].innerHTML, '10/11/1969');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[2].innerHTML, '10/11/1969');
  t.equal(modeBtnTable.rows[2].cells[2].innerHTML, '10/11/69');
  t.equal(modeBtnTable.rows[3].cells[2].innerHTML, '12-2-70');

  t.end();
});

