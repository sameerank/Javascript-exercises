var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return { selectedTabIndex: 0 };
  },
  render: function () {
    var titles = this.tabPressed();
    // debugger;
    return(
      <div>
        <ul>{titles}</ul>
        <article>{this.props.tabs[this.state.selectedTabIndex].
            content}</article>
      </div>
    );
  },
  updateTabIdx: function(index){
    this.setState({selectedTabIndex: index});
  },
  isSelected: function(index) {
    if (this.state.selectedTabIndex === index) {
      return "selected";
    } else {
      return "unselected";
    }
  },
  tabPressed: function () {
    var self = this;
    return this.props.tabs.map(function(tab, index){
      return <button key={index} className={self.isSelected(index)} onClick={self.updateTabIdx.bind(self, index)}>{tab.title}</button>;
    });
  }
});

module.exports = Tabs;
