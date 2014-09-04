clean:
	rm -rf node_modules

install:
	npm install

test:
	bash -c "time NODE_ENV=test ./node_modules/.bin/mocha --recursive test -R list"

.PHONY: clean install test
