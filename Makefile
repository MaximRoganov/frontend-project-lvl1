install:
			npm install
start:
			npx babel-node src/bin/brain-games.js
publish:
			npm publish --dry-run
link:
			npm link
lint:
			npx eslint
.PHONY: test