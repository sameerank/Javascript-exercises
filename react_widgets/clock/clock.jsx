var React = require('react');
var ReactDOM = require('react-dom');
var Display = require('./display');

var Clock = React.createClass({
  render: function() {
    return (
      <div>
        <Display/>
      </div>
    );
  } 
});


module.exports = Clock;
