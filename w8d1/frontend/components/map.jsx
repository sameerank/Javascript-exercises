var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util');


var markersArray = [];

var Map = React.createClass({


  componentDidMount: function () {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.benchListener = BenchStore.addListener(this._onChange);
    this.map.addListener('idle', this._getBounds);

    this.updatedBenches = BenchStore.all();
  },

  componentWillUnmount: function () {
  this.benchListener.remove();
  },

  _getBounds: function () {
    var mapBounds = this.map.getBounds();
    var NELatLong = mapBounds.getNorthEast();
    var SWLatLong = mapBounds.getSouthWest();
    var bounds = {
      "northEast" : {
        "lat" : NELatLong.lat().toString(),
        "lng" : NELatLong.lng().toString()
      },
      "southWest" : {
        "lat" : SWLatLong.lat().toString(),
        "lng" : SWLatLong.lng().toString()
      }
    };
    bounds = JSON.stringify(bounds);

    ApiUtil.fetchBenches(bounds);
  },

  _onChange: function () {
    var that = this;

    markersArray.forEach(function (marker) {
      marker.setMap(null);
    })

    BenchStore.all().forEach(function (bench) {
      var marker =  new google.maps.Marker({
        position: {lat: bench.lat, lng: bench.lng},
        map: that.map,
        title: bench.description
      });
      markersArray.push(marker);
    });

  },

  render: function () {
    return (
      <div className="map" ref="map" />
    );
  }
});

module.exports = Map;
