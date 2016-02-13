var FollowToggle = require("./follow_toggle");
var UsersSearch = require("./users_search");

$(document).ready(function () {

  var buttons = $("button.follow-toggle");
  $.each(buttons, function (index, button) {
    new FollowToggle(button);
  });


  var input = $(".users-search > input");
  $.each(input, function (index, el) {
    new UsersSearch(el);
  });
});
