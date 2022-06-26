tape('modeButton - sorts dot separated numbers', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(6)').firstChild;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Test the version column has sorts
  t.equal(modeBtnTable.rows[1].cells[5].innerHTML, '11.0.1');
  t.equal(modeBtnTable.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(modeBtnTable.rows[3].cells[5].innerHTML, '31.0.1650.57');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[5].innerHTML, '31.0.1650.57');
  t.equal(modeBtnTable.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(modeBtnTable.rows[3].cells[5].innerHTML, '11.0.1');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[5].innerHTML, '11.0.1');
  t.equal(modeBtnTable.rows[2].cells[5].innerHTML, '18.0.1284.49');
  t.equal(modeBtnTable.rows[3].cells[5].innerHTML, '31.0.1650.57');

  t.end();
});
