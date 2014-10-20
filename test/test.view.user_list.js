var should = require("should");
var jsdom = require("jsdom");
var React;
var utils;

var document;
var window;
var $;

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

  beforeEach(function() {
    global.window = jsdom.jsdom().createWindow("<html><body></body></html>");
    global.document = global.window.document;
    global.navigator = global.window.navigator;
    React = require("react/addons");
    utils = React.addons.TestUtils;
  });

  afterEach(function() {
    delete global.window;
    delete global.document;
    delete global.navigator;
  });

  describe("should create with 3 items", function() {

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_list", "app/model/user_collection"], function(ViewUserList, UserCollection) {

        var userCollection = new UserCollection([
          {id: 1, name: "Tim", age: 10},
          {id: 2, name: "Ida", age: 10},
          {id: 3, name: "Rob", age: 10}
        ]);

        var view = utils.renderIntoDocument(new ViewUserList({userCollection: userCollection}));
        $ = require("jquery")(view.getDOMNode());

        $.find(".user-item").length.should.equal(3);
        $.find(".pagination-next").length.should.equal(0);

        done();
      });

    });

  });

  describe("should create with 5 items and display next button", function() {

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_list", "app/model/user_collection"], function(ViewUserList, UserCollection) {

        var userCollection = new UserCollection([
          {id: 1, name: "Tim", age: 10},
          {id: 2, name: "Ida", age: 10},
          {id: 3, name: "Rob", age: 10},
          {id: 4, name: "Rob", age: 10},
          {id: 5, name: "Rob", age: 10}
        ]);

        var view = utils.renderIntoDocument(new ViewUserList({userCollection: userCollection}));
        $ = require("jquery")(view.getDOMNode());

        $.find(".user-item").length.should.equal(5);
        $.find(".pagination-next").length.should.equal(1);

        done();
      });

    });

  });

});