var React = require('react');

var Display = React.createClass({
  getInitialState: function () {
    return { time: new Date().toTimeString() };
  },
  tick: function() {
    this.setState( {time: new Date().toTimeString()} );
  },
  componentDidMount: function () {
    setInterval(this.tick, 1000);
  },
  render: function () {
    return (<div>
      {this.state.time}
    </div>);
    }
});

module.exports = Display;
