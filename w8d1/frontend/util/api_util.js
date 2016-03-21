var ApiActions = require('../actions/api_actions');
var

ApiUtil = {
  fetchBenches: function(query){
    //make an api call using AJAX in here
    var options = {
      url: "api/benches",
      type: "GET",
      data: { bounds: query },
      success: function (resp) {
        ApiActions.receiveAll(resp);
      },
      error: function (resp) {
      }
    };
    $.ajax(options);
  }
}

module.exports = ApiUtil;
