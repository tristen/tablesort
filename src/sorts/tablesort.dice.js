(function(){
  var cleanNumber = function(i) {

    var match = i.match(/^(\d*)[dD](\d*)/);    // To parse the numbre of dices, and their type
    var minus = i.match(/[dD]\d?\s?[-](\d?)/); // To parse the bonus
    var plus  = i.match(/[dD]\d?\s?[+](\d?)/); // To parse the malus

    if (minus) { malus = parseInt(minus[1]) } else { malus = 0 }
    if (plus)  { bonus = parseInt(plus[1])  } else { bonus = 0 }
    if (match) {
      moy = ( parseInt(match[2]) + 1 ) / 2; // To handle D2, D6, D100, ...
    }

    // average = match[1] * moy + parseInt(bonus) - parseInt(malus);
    average = match[1] * moy + bonus - malus;
    return average;
  },

  compareNumber = function(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);

    a = isNaN(a) ? 0 : a;
    b = isNaN(b) ? 0 : b;

    return a - b;
  };

  Tablesort.extend('dice', function(item) {
    return item.match(/^\d*[dD]\d*/);
  }, function(a, b) {
    a = cleanNumber(a);
    b = cleanNumber(b);

    return compareNumber(b, a);
  });
}());
