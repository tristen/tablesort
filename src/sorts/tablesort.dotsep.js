// Dot separated values. E.g. IP addresses or version numbers.
Tablesort.extend('dotsep', function(item) {
  return /^(\d+\.)+\d+$/.test(item);
}, function(a, b) {
  a = a.split('.');
  b = b.split('.');

  for (var i = 0, len = Math.max(a.length, b.length), ai, bi; i < len; i++) {
    ai = parseInt(i < a.length ? a[i] : '0', 10);
    bi = parseInt(i < b.length ? b[i] : '0', 10);

    if (ai === bi) continue;
    if (ai > bi) return -1;
    if (ai < bi) return 1;
  }

  return 0;
});
