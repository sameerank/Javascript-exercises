(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }

var MovingObject = Asteroids.MovingObject = function (args) {
  this.pos = args.pos;
  this.vel = args.vel;
  this.radius = args.radius;
  this.colour = args.colour;
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.colour;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
};
  }
)();
