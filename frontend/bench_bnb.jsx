var ReactDOM = require('react-dom');
var React = require('react');
var BenchStore = require('./stores/bench');
var ApiUtil = require('./util/api_util');
var Index = require('./components/index');
var Search = require('./components/search')
//
document.addEventListener("DOMContentLoaded", function () {
  var root = document.querySelector('#content');
  ReactDOM.render(<Search />, root);
});
