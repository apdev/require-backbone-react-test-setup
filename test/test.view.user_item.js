var should = require("should");
var jsdom = require("jsdom");
var React;
var utils;

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

describe("view user item", function() {

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

  describe("should create item", function() {

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_item", "app/model/user_model"], function(ViewUserItem, UserModel) {

        var userModel = new UserModel(
          {id: 1, name: "Tim", age: 10}
        );

        var view = utils.renderIntoDocument(new ViewUserItem({model: userModel}));
        var h3 = utils.findRenderedDOMComponentWithTag(view, "h3");
        h3.getDOMNode().textContent.should.equal("Tim");
        var p = utils.findRenderedDOMComponentWithTag(view, "p");
        p.getDOMNode().textContent.should.equal("Age: 10");

        done();
      });

    });

  });

  describe("should create item and mark current user ('you!')", function() {

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_item", "app/model/user_model"], function(ViewUserItem, UserModel) {

        var userModel = new UserModel(
          {id: 1, name: "Tim", age: 10}
        );

        var view = utils.renderIntoDocument(new ViewUserItem({model: userModel, myUserId: 1}));
        var h3 = utils.findRenderedDOMComponentWithTag(view, "h3");
        h3.getDOMNode().textContent.should.equal("Tim (you!)");
        var p = utils.findRenderedDOMComponentWithTag(view, "p");
        p.getDOMNode().textContent.should.equal("Age: 10");

        done();
      });

    });

  });

});