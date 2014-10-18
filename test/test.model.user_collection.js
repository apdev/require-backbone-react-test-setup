"use strict";

var should = require("should");

var requirejs = require("requirejs");
requirejs.config({
  baseUrl: "src/js/",
  nodeRequire: require,
  paths: {
    "underscore": "vendor/lodash.compat.2.4.1",
    "backbone": "vendor/backbone.1.1.2",
    "models": "models"
  }
});

describe("user collection", function(){

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