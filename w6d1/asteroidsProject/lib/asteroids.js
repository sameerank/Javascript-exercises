(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


  var Asteroid = function(posObj) {

    var args = {};
    args.colour = "#333333";
    args.radius = 7;
    args.pos = posObj.pos;
    args.vel = Asteroids.Util.randomVec(1);

    MovingObject.call(this, args);
  };

  Asteroids.Util.inherits(Asteroid, MovingObject);

  }
)();
