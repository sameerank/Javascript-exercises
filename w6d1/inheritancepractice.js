Function.prototype.inherits = function (parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject () {}

MovingObject.prototype.move = function () {
  console.log("zoom!");
};

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

var firefly = new Ship();
firefly.move();
