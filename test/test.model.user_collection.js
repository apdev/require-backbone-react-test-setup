var should = require("should");
var jsdom = require("jsdom");

var document;
var window;

var requirejs = require("requirejs");
var requireConfig = require("../src/js/frontend.js");

// force to require "node version"
delete requireConfig.paths.react;

requirejs.config({
  baseUrl: "src/js/",
  nodeRequire: require,
  paths: requireConfig.paths
});

describe("view user list", function() {

  before(function() {
    global.window = jsdom.jsdom().createWindow("<html><body></body></html>");
    global.document = global.window.document;
    global.navigator = global.window.navigator;
  });

  afterEach(function() {
    delete global.window;
    delete global.document;
    delete global.navigator;
  });

  describe("should calculate average age ", function() {

    var UserCollection;

    before(function(done) {
      requirejs(["app/model/user_collection"], function(m) {
        UserCollection = m;
        done();
      });
    });

    it("", function(done) {

      var collection = new UserCollection([
        {id: 1, name: "Tim", age: 10},
        {id: 2, name: "Ida", age: 12},
        {id: 3, name: "Rob", age: 14}
      ], {parse: true});

      collection.averageAge.should.equal(12);

      done();

    });

  });

});