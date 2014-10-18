var should = require("should");
var jsdom = require("jsdom");
var React;
var utils;

var document;
var window;

var requirejs = require("requirejs");

requirejs.config({
  baseUrl: "src/js/",
  nodeRequire: require,
  paths: {
    "underscore": "vendor/lodash.compat.2.4.1",
    "backbone": "vendor/backbone.1.1.2",
    "JSXTransformer": "vendor/plugins/JSXTransformer.0.10.0",
    "jsx": "vendor/plugins/require.jsx.0.1.0",
    "text": "vendor/plugins/require.text.2.0.10"
  }
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

    var ViewUserItem,
      userModel;

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_item", "app/model/user_model"], function(ViewUserItem, UserModel) {

        userModel = new UserModel(
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

    var ViewUserItem,
      userModel;

    it("", function(done) {

      requirejs(["jsx!app/view/view_user_item", "app/model/user_model"], function(ViewUserItem, UserModel) {

        userModel = new UserModel(
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