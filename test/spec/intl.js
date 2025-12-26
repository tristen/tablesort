tape('sorts international', function(t) {
  var el = table.querySelector('th:nth-child(12)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  // Basic test with accented text
  t.equal(table.rows[1].cells[11].innerHTML, 'Hadès');
  t.equal(table.rows[2].cells[11].innerHTML, 'Héra');
  t.equal(table.rows[3].cells[11].innerHTML, 'Hypnos');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[11].innerHTML, 'Hypnos');
  t.equal(table.rows[2].cells[11].innerHTML, 'Héra');
  t.equal(table.rows[3].cells[11].innerHTML, 'Hadès');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(table.rows[1].cells[11].innerHTML, 'Hadès');
  t.equal(table.rows[2].cells[11].innerHTML, 'Héra');
  t.equal(table.rows[3].cells[11].innerHTML, 'Hypnos');

  t.end();
});

