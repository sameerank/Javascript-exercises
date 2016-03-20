var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var addNumbers = function(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Gimme a number : ", function (numString) {
      var num = parseInt(numString);
      console.log(sum += num);
      numsLeft --;

      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(sum);
  }
  
};

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
