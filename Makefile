lint:
	./node_modules/.bin/jshint tablesort.js

tablesort.min.js:
	./node_modules/.bin/uglifyjs tablesort.js > tablesort.min.js
