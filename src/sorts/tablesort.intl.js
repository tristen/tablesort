(function(){
	const collator = Intl.Collator();
	Tablesort.extend('intl', _ => false, (a,b) => collator.compare(b, a));
}());