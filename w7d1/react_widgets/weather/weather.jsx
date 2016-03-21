var React = require('react');

var Weather = React.createClass({
  getInitialState: function () {
    return { coordinates: 7};
  },
  setCurrentCoords: function(pos){
    var coords = pos.coords;
    this.setState({coordinates: coords});
  },
  grabPosition: function(){
    navigator.geolocation.getCurrentPosition(this.setCurrentCoords);
  },
  componentDidMount: function () {
    setInterval(this.grabPosition, 1000);
  },
  render: function () {
    return (
      <div>
        {this.state.coordinates.longitude}
        <br/>
        {this.state.coordinates.latitude}
      </div>
    );
  }
});

module.exports = Weather;
