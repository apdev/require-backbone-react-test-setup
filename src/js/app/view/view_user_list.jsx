define(function(require) {

  "use strict";

  var React = require("react");

  var UserItemView = require("jsx!app/view/view_user_item");

  /**
   *
   *
   *
   */
  var ViewUserList = React.createClass({

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
      var avarageAgeLabel = "Average age: " + this.props.userCollection.averageAge;
      return (
        <div className="user-list-container">
          <div className="user-list-header">
            <h1>Users</h1>
            <p>{avarageAgeLabel}</p>
          </div>
          <ul className="user-list">
            {
              (function(self){
                return self.props.userCollection.map(function(model, index) {
                  return <UserItemView model={model} myUserId={self.props.myUserId} key={"user-" + model.id}/>;
                })
              })(this)
            }
          </ul>
          {
            (function(self){
              if (self.props.userCollection.length > 4) {
                return <a href="#" className="pagination-next">Next page (sorry, this btn is fake)</a>
              }
            })(this)
          }
        </div>
      );
    }

  }); // end ViewUserList


  return ViewUserList;
});