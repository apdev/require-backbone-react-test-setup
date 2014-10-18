define(function(require) {

  "use strict";

  var Backbone = require("backbone");
  var _ = require("underscore");

  var UserModel = require("app/model/user_model");

  /**
   *
   *
   *
   */
  var UserCollection = Backbone.Collection.extend({
    model: UserModel,

    initialize: function() {
    },

    parse: function(data) {
      var ageSum = _.reduce(data, function(memo, item){ return memo + item.age; }, 0);
      this.averageAge = ageSum / data.length;
      return data;
    }

  }); // end UserCollection

  return UserCollection;
});