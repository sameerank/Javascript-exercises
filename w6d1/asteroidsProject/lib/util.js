(function () {
  if (typeof Asteroids === "undefined") {
    window.Asteroids = {};
  }


Asteroids.Util.inherits = function (childClass, parentClass) {
  function Surrogate () {}
  Surrogate.prototype = parentClass.prototype;
  childClass.prototype = new Surrogate();
  childClass.prototype.constructor = childClass;
};

Asteroids.Util.randomVec = function (length) {
  var vx = Math.random() * (Math.round(Math.random()) * 2 - 1);
  var vy = Math.sqrt(1 - (vx * vx)) * (Math.round(Math.random()) * 2 - 1);

  return [vx * length, vy * length];
};

}
)();
