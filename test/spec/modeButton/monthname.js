tape('modeButton - sorts monthname', function(t) {
  var el = modeBtnTable.querySelector('th:nth-child(10)').firstChild;

  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[9].innerHTML, 'January');
  t.equal(modeBtnTable.rows[2].cells[9].innerHTML, 'February');
  t.equal(modeBtnTable.rows[3].cells[9].innerHTML, 'April');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[9].innerHTML, 'April');
  t.equal(modeBtnTable.rows[2].cells[9].innerHTML, 'February');
  t.equal(modeBtnTable.rows[3].cells[9].innerHTML, 'January');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTable.rows[1].cells[9].innerHTML, 'January');
  t.equal(modeBtnTable.rows[2].cells[9].innerHTML, 'February');
  t.equal(modeBtnTable.rows[3].cells[9].innerHTML, 'April');

  t.end();
});

