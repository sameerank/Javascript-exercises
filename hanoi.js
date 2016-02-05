var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


HanoiGame.prototype.run = function (completionCallback) {
  var moveEvent = function(startTowerIdx, endTowerIdx) {
    var failedMove = !this.move(startTowerIdx, endTowerIdx);

    if (failedMove) {
      console.log("incorrect move");
    } else {

      if (this.isWon()) {
        console.log("congratulations, you win!");
        completionCallback();
      } else {
        this.run(completionCallback);
      }

    }
  };

  var moveEventBoundToHanoiGame = moveEvent.bind(this);

  this.promptMove(moveEventBoundToHanoiGame);

};

function HanoiGame() {
  this.stacks = [[3,2,1],[],[]];
}

HanoiGame.prototype.promptMove = function (callBack) {
  this.print();
  reader.question("Select 'from' tower: ", function (numString1) {
    reader.question("Select 'to' tower: ", function (numString2) {
      var startTowerIdx = parseInt(numString1);
      var endTowerIdx = parseInt(numString2);
      callBack(startTowerIdx, endTowerIdx);
    });
  });
};

HanoiGame.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
  if (this.stacks[startTowerIdx].length === 0) {
    return false;
  } else if(this.stacks[endTowerIdx].length === 0) {
    return true;
  } else if(this.stacks[startTowerIdx].slice(-1) <
   this.stacks[endTowerIdx].slice(-1)) {
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.move = function (startTowerIdx, endTowerIdx) {
  if (this.isValidMove(startTowerIdx, endTowerIdx)) {
    this.stacks[endTowerIdx].push(this.stacks[startTowerIdx].pop());
    return true;
  } else {
    return false;
  }
};

HanoiGame.prototype.print = function () {
  console.log("Tower zero: " + JSON.stringify(this.stacks[0]));
  console.log("Tower one: " + JSON.stringify(this.stacks[1]));
  console.log("Tower two: " + JSON.stringify(this.stacks[2]));
};

HanoiGame.prototype.isWon = function () {
  return ((this.stacks[1].length === 3) || (this.stacks[2].length === 3));
};

var game = new HanoiGame();
game.run(function(){
  reader.close();
});
