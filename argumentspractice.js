function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// console.log(sum(1,2,3,4,5));

// arguments = [1,2,3]
//
// [].slice.call(arguments) #=> arguments.slice(1);

Function.prototype.myBind = function (context) {
  var fn = this;
  var bargs = [].slice.call(arguments,1);
  return function() {
    var cargs = [].slice.call(arguments);
    var dargs = bargs.concat(cargs);
    return fn.apply(context, dargs);
  };
};

// function Cat(name) {
//   this.name = name;
// }
//
// Cat.prototype.says = function (sound, person) {
//   console.log(this.name + " says " + sound + " to " + person + "!");
//   return true;
// };
//
// var markov = new Cat("Markov");
// var breakfast = new Cat("Breakfast");
//
// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true
//
// markov.says.myBind(breakfast, "meow", "Kush")();
// // Breakfast says meow to Kush!
// // true
//
// markov.says.myBind(breakfast)("meow", "a tree");
// // Breakfast says meow to a tree!
// // true
//
// markov.says.myBind(breakfast, "meow")("Markov");
// // Breakfast says meow to Markov!
// // true
//
// var notMarkovSays = markov.says.myBind(breakfast);
// notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

function curriedSum(numArgs) {
  var numbers = [];
  var _curriedSum = function (number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce(function(a, x){ return a + x; });
    } else {
      return _curriedSum;
    }
  };
  return _curriedSum;
}

// var curriedTotal = curriedSum(4);
// console.log(curriedTotal(5)(30)(20)(1)); // => 56

// var f1 = curriedSum(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(6); // = 30
//
// console.log(result);
//
// // or more briefly:
// console.log(curriedSum(3)(4)(20)(6)); // == 30


Function.prototype.myCurry = function (numArgs) {
  var fn = this;
  var args = [];
  var _myCurry = function() {
    var argArray = [].slice.call(arguments);
    args = args.concat(argArray);
    if (args.length === numArgs) {
      return fn.apply(null, args);
    } else {
    return _myCurry;
    }
  };
  return _myCurry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
var f1 = sumThree.myCurry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30
console.log(result);


// or more briefly:
console.log(sumThree.myCurry(3)(4)(20)(6)); // == 30
