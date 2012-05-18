UGLIFYJS = ./node_modules/.bin/uglifyjs
LINT = ./node_modules/.bin/uglifyjs

tablesort.min.js:
	$(UGLIFYJS) tablesort.js > tablesort.min.js

lint:
	$(LINT) tablesort.js
