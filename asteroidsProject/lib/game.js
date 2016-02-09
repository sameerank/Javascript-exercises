(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }



var Game = function(DIM_X, DIM_Y, NUM_ASTEROIDS){
  this.DIM_X = DIM_X;
  this.DIM_Y = DIM_Y;
  this.NUM_ASTEROIDS = NUM_ASTEROIDS;

  this.addAsteroids();
};

Game.prototype.randomPosition = function () {
  return { pos: [this.DIM_X * Math.random(), this.DIM_Y * Math.random()] };
};

Game.prototype.addAsteroids = function () {
  this.asteroids = [];
  for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
    var newRandomPosition = this.randomPosition;
    this.asteroids.push( new Asteroid(newRandomPosition) );
  }
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(
    function (asteroid) {
      asteroid.draw(ctx);
    }
  );
};

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(
    function (asteroid) {
      asteroid.move();
    }
  );
};
}
)();
