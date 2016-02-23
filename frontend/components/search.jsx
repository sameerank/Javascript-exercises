var React = require('react');
var BenchStore = require('../stores/bench.js');
var ApiUtil = require('../util/api_util');
var Map = require('./map');
var Index = require('./index');

var Search = React.createClass({
  render: function () {
    return (
      <div>
        <Map />
        <Index />
      </div>
    );
  }
});

module.exports = Search;
