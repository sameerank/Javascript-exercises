Array.prototype.myUniq = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    if (!result.include(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.include = function(el) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === el) {
      return true;
    }
  }
  return false;
};

Array.prototype.twoSum = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
};

Array.prototype.transpose = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push([]);
  }

  for (var k = 0; k < this.length; k++) {
    for (var j = 0; j < this.length; j++) {
      result[k].push(this[j][k]);
    }
  }

  return result;
};

Array.prototype.myEach = function(fxn) {
  for (var i = 0; i < this.length; i++) {
    fxn(this[i]);
  }
  return this;
};

Array.prototype.myMap = function(fxn) {
  var result = [];
  var mappingFxn = function(el) {
    result.push(fxn(el));
  };
  this.myEach(mappingFxn);
  return result;
};

var addOne = function(num) {
  return num + 1;
};

Array.prototype.myInject = function(fxn) {
  var copyAry = this.slice(1);
  var accum = this[0];
  var injectFxn = function(el) {
    accum = fxn(accum, el);
  };
  copyAry.myEach(injectFxn);
  return accum;
};

var addFxn = function(a, b) {
  return a + b;
};

var multiply = function(a, b) {
  return a * b;
};

Array.prototype.bubbleSort = function() {
  var sorted = false;
  while (sorted === false) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        var biggerVal = this[i];
        var smallerVal = this[i + 1];
        this[i] = smallerVal;
        this[i + 1] = biggerVal;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j <= this.length; j++) {
      result.push(this.slice(i,j));
    }
  }

  return result.myUniq();
};

var exp1 = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * exp1(base, exponent - 1);
  }
};

var exp2 = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else if (exponent === 1) {
    return base;
  } else if (exponent % 2 === 0) {
    return exp2(base, exponent / 2) * exp2(base, exponent / 2);
  } else {
    return base * exp2(base, (exponent - 1) / 2) *
    exp2(base, (exponent - 1) / 2);
  }
};

var fibItr = function(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    var result = [1, 1];
    for (var i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
  }
  return result;
};

var fibRec = function(n) {
  if (n === 1) {
    return [1];
  } else if (n === 2) {
    return [1, 1];
  } else {
    var old = fibRec(n-1);
    old.push(old[old.length-1] + old[old.length-2]);
    return old;
  }
};

var bSearch = function(array, target) {
  var pivot = Math.floor(array.length / 2);
  if (array[pivot] === target) {
    return pivot;
  } else if (array[pivot] > target) {
    return bSearch(array.slice(0, pivot), target);
  } else if (array[pivot] < target) {
    return bSearch(array.slice(pivot), target) + pivot;
  }
};

var mergeSort = function(ary) {
  if (ary.length <= 1) {
    return ary;
  }

  var pivot = Math.floor(ary.length / 2);
  var left = ary.slice(0, pivot);
  var right = ary.slice(pivot);

  return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {
  var result = [];

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return result.concat(left).concat(right);
};

// var subsets = function(ary) {
//   if (ary.length <= 1) {
//     return ary;
//   }
//   var smallerSubset = ary.slice(1);
//   var smallerSubsets = subsets(smallerSubset);
//   var largerSubsets = [];
//   for (var i = 0; i < smallerSubsets.length; i++) {
//     largerSubsets.push(smallerSubsets[i].push(ary[0]));
//   }
//   return largerSubsets.concat(smallerSubsets);
// };

var subsets = function(ary) {
  if (ary.length === 0) {
    return [[]];
  }

  var last = ary.slice(-1);
  var smallerSubsets = subsets(ary.slice(0,-1));
  var largerSubsets = [];
  for (var i = 0; i < smallerSubsets.length; i++) {
    largerSubsets.push(
      smallerSubsets[i].concat(last)
    );
  }

  return smallerSubsets.concat(largerSubsets);
};

// Tests go here
// console.log(include([1, 2, 1, 3, 3],3));
// console.log(include([1, 2, 1, 3, 3],5));
// console.log(myUniq([1, 2, 1, 3, 3]));

// console.log(twoSum([-1, 0, 2, -2, 1]));

// console.log(transpose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ]));

// myEach([1,2,3], console.log);

// console.log(myMap([1,2,3,4], addOne));

// console.log(myInject([1,2,3,4], multiply));

// console.log(substrings("cat"));
// console.log(substrings("Timbuktu"));

// console.log(exp1(2, 3));
// console.log(exp2(2, 3));

// console.log(fibItr(5));
// console.log(fibRec(5));
// console.log(bSearch([2, 3, 4, 5, 6], 3));

// console.log(mergeSort([8, 5, 7, 2, 11, 3]));

// console.log(subsets([1,2,3,4]));

console.log([1, 2, 1, 3, 3].myUniq());
