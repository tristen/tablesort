tape('modeButton - sorts tbodys independently', function(t) {
  var el = modeBtnTableMulti.querySelector('th:nth-child(1)').firstChild;
  var event = document.createEvent('HTMLEvents');
  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableMulti.rows[1].cells[0].innerHTML, '1');
  t.equal(modeBtnTableMulti.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableMulti.rows[3].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.rows[4].cells[0].innerHTML, '2');
  t.equal(modeBtnTableMulti.rows[5].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.rows[6].cells[0].innerHTML, '4');

  event.initEvent('click', true, false);
  el.dispatchEvent(event);

  t.equal(modeBtnTableMulti.rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.rows[2].cells[0].innerHTML, '2');
  t.equal(modeBtnTableMulti.rows[3].cells[0].innerHTML, '1');
  t.equal(modeBtnTableMulti.rows[4].cells[0].innerHTML, '4');
  t.equal(modeBtnTableMulti.rows[5].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.rows[6].cells[0].innerHTML, '2');

  t.equal(modeBtnTableMulti.tBodies[0].rows[0].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.tBodies[0].rows[1].cells[0].innerHTML, '2');
  t.equal(modeBtnTableMulti.tBodies[0].rows[2].cells[0].innerHTML, '1');
  t.equal(modeBtnTableMulti.tBodies[1].rows[0].cells[0].innerHTML, '4');
  t.equal(modeBtnTableMulti.tBodies[1].rows[1].cells[0].innerHTML, '3');
  t.equal(modeBtnTableMulti.tBodies[1].rows[2].cells[0].innerHTML, '2');

  t.end();
});
