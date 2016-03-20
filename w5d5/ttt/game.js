var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Game () {
  this.board = new Board();
  this.players = [new HumanPlayer(), new ComputerPlayer()];
}

Game.prototype.play = function (completionCallback) {
  var currPlayer = this.players[0];
  var moveCoords = currPlayer.promptMove();

  this.board.placeMark(moveCoords, currPlayer.mark);

  if (this.board.won) {
    console.log("Congrats! You won.");
    completionCallback();
  } else {
    this.players.unshift(this.players.pop());
    this.play(completionCallback);
  }
 };
