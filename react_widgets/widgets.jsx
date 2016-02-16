var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require("./tab");
var Clock = require("./clock/clock");
var Weather = require("./weather/weather");


var tabs = [
  {title: "object 1", content: "object 1 content"},
  {title: "object 2", content: "object 2 content"}
];

var Widgets = React.createClass({
  render: function () {
    return(
      <div>
        <Tabs tabs={tabs}></Tabs>
        <Clock/>
        <Weather/>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById("widgets"));
});
