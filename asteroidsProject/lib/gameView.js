(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var GameView = function() {
  this.game = new Game(300, 300, 50);
  var ctx = canvasEl.getContext("2d");
};

GameView.prototype.start = function () {
  window.setInterval(function () {
  // call this once per second
    this.game.moveObjects();
    this.game.draw();
  }, 20);

};



}
)();
