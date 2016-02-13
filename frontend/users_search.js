function UsersSearch (el) {
  this.$el = $(el);
  this.$el.keypress(this.handleKeypress.bind(this));

}

UsersSearch.prototype.render = function (jsonObj) {

  $("ul.users").html("");

  $.each(jsonObj, function(index, el) {
    $("ul.users").append("<li>" + el.username + "</li>");
  });
};

UsersSearch.prototype.handleKeypress = function (e) {
  // e.preventDefault();
  this.v = this.$el.val();
  $.ajax({
    url: "/users/search",
    data: {query: this.v},
    type: "GET",
    dataType: "json",
    success: function (data) {
      this.render(data);
    }.bind(this)
  });
};

module.exports = UsersSearch;
