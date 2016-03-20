function Board () {
  this.grid = [new Array(3), new Array(3), new Array(3)];
}

Board.prototype.won = function () {
  var candidateLines = [
    this.grid[0],
    this.grid[1],
    this.grid[2],
    [this.grid[0][0], this.grid[1][0], this.grid[2][0]],
    [this.grid[0][1], this.grid[1][1], this.grid[2][1]],
    [this.grid[0][2], this.grid[1][2], this.grid[2][2]],
    [this.grid[0][0], this.grid[1][1], this.grid[2][2]],
    [this.grid[2][0], this.grid[1][1], this.grid[0][2]]
  ];

  function checkIfAllSame(array) {
    return (array.every(function(el) { return el === "X"; })) ||
    (array.every(function(el) { return el === "O"; }));
  }

  candidateLines.forEach(function(array) {
    if (checkIfAllSame(array)) {
      return true;
    }
  });

  return false;

};

Board.prototype.winner = function () {
};

Board.prototype.empty = function (pos) {
  return this.grid[pos[0]][pos[1]] === undefined;
};

Board.prototype.placeMark = function (pos, mark) {
  this.grid[pos[0]][pos[1]] = mark;
};
