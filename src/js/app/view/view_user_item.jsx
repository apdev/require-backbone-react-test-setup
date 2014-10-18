define(function(require) {

  "use strict";

  var React = require("react");

  /**
   *
   *
   *
   */
  var ViewUserItem = React.createClass({

    getInitialState: function() {
      return {};
    },

    componentWillMount: function() {
    },

    componentWillUnmount: function() {
    },

    componentDidMount: function() {
    },

    render: function() {
      var nameLabel = this.props.model.get("name"),
        ageLabel = "Age: " + this.props.model.get("age");

      if (this.props.model.id === this.props.myUserId) {
        nameLabel += " (you!)";
      }
      return (
        <li className="user-item">
         <h3>{nameLabel}</h3>
         <p>{ageLabel}</p>
        </li>
      );
    }

  }); // end ViewUserItem


  return ViewUserItem;
});