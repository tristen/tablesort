tablesort.min.js:
	./node_modules/.bin/uglifyjs tablesort.js > tablesort.min.js

lint:
	./node_modules/.bin/jshint tablesort.js
