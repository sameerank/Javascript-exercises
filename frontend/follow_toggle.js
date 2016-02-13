function FollowToggle (el) {
  this.$el = $(el);
  this.userId = this.$el.data("user-id");
  this.followState = this.$el.data("initial-follow-state");
  this.render();
  this.$el.click(this.handleClick.bind(this));
}

FollowToggle.prototype.render = function () {
  if (this.followState === "following") {
    this.$el.html("Unfollow");
  } else {
    this.$el.html("Follow");
  }
  this.$el.prop( "disabled", false );
};

FollowToggle.prototype.handleClick = function (e) {
  e.preventDefault();
  this.$el.prop( "disabled", true );
  var postType;
  var newFollowState;
  if (this.followState === "unfollowing") {
    postType = "POST";
    newFollowState = "following";
  } else {
    postType = "DELETE";
    newFollowState = "unfollowing";
  }

  $.ajax({
    url: "/users/" + this.userId + "/follow",
    data: {id: this.userId},
    type: postType,
    dataType: "json",
    success: function () {
      this.followState = newFollowState;
      this.render();
    }.bind(this)
  });
};

module.exports = FollowToggle;
