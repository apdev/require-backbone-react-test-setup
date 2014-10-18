# Test setup for requireJS, Backbone.js and React

## View in browser
```
cd src
python -m SimpleHTTPServer
```
Open [http://localhost:8000](http://localhost:8000)

## Run test
Mocha must be installed gloablly (`npm install -g mocha`).

Install dependencies
```
npm install
```

Run all test
```
npm test
```

Run individual test files
```
mocha test/test.model.user_collection.js
```