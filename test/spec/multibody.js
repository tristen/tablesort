tape('sorts tbodys independently', function(t) {
  var el = tableMulti.querySelector('th:nth-child(1)');
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableMulti.rows[1].cells[0].innerHTML, '1');
  t.equal(tableMulti.rows[2].cells[0].innerHTML, '2');
  t.equal(tableMulti.rows[3].cells[0].innerHTML, '3');
  t.equal(tableMulti.rows[4].cells[0].innerHTML, '2');
  t.equal(tableMulti.rows[5].cells[0].innerHTML, '3');
  t.equal(tableMulti.rows[6].cells[0].innerHTML, '4');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(tableMulti.rows[1].cells[0].innerHTML, '3');
  t.equal(tableMulti.rows[2].cells[0].innerHTML, '2');
  t.equal(tableMulti.rows[3].cells[0].innerHTML, '1');
  t.equal(tableMulti.rows[4].cells[0].innerHTML, '4');
  t.equal(tableMulti.rows[5].cells[0].innerHTML, '3');
  t.equal(tableMulti.rows[6].cells[0].innerHTML, '2');

  t.equal(tableMulti.tBodies[0].rows[0].cells[0].innerHTML, '3');
  t.equal(tableMulti.tBodies[0].rows[1].cells[0].innerHTML, '2');
  t.equal(tableMulti.tBodies[0].rows[2].cells[0].innerHTML, '1');
  t.equal(tableMulti.tBodies[1].rows[0].cells[0].innerHTML, '4');
  t.equal(tableMulti.tBodies[1].rows[1].cells[0].innerHTML, '3');
  t.equal(tableMulti.tBodies[1].rows[2].cells[0].innerHTML, '2');

  t.end();
});
