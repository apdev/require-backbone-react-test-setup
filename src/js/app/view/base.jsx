define(function(require) {

  "use strict";

  var React = require("react");
  var Backbone = require("backbone");

  var UserCollection = require("app/model/user_collection");
  var UserListView = require("jsx!app/view/view_user_list");

  /**
   *
   *
   *
   */
  var BaseView = React.createClass({

    getInitialState: function() {
      var userCollection = new UserCollection([
        {id: 1, name: "Tim", age: 5},
        {id: 2, name: "Ida", age: 26},
        {id: 3, name: "Rob", age: 55},
        {id: 4, name: "Jane", age: 32},
        {id: 5, name: "Steve", age: 18}
      ], {parse: true});

      return {
        userCollection: userCollection
      };
    },

    componentWillMount: function() {
    },

    componentDidMount: function() {
    },

    render: function() {
      return <UserListView userCollection={this.state.userCollection} myUserId={2}/>;
    }

  }); // end BaseView

  return BaseView;
});