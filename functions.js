// maxOrMin
function maxOrMin(num1, num2, bool) {
  if(bool) {
    return (num1 > num2)?num1:num2;
  } else if (!bool) {
    return (num1 < num2)?num1:num2;
  }
}

maxOrMin(6, 2, false);

//sillySum(arr)

var randomNumbers = [1, 5, 3, 10, 9];

function sillySum(array) {
   return array.map(function newArrayFunction(currentValue, index) {
       return currentValue + (currentValue * index);
   });
}

sillySum(randomNumbers);

//numSquare(max)

function numSquare(max) {
  var squaredArray = [];
  for (i = 0; i < max; i++) {
    var square = i * i;
    if (square <= max) {
        squaredArray.push(square);
    }
  }
  return squaredArray;
}

numSquare(100);

//isPrime(Num)
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = num - 1; i > 1; i--) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime(2);
isPrime(17);
isPrime(9);

//filter(arr, callback)

/*
Not sure why the javascript console in Chrome spits out Array[3] on the filter problem rather than just [1, 3, 5].

The result when I plug in isOdd as a function and the example array [1,2,3,4,5] is:

0 :  1
1 :  3
2 :  5

Whyyyyy?
*/

var filter = function(arr, callback) {
    var filteredArr = [];
    for (i = 0; i < arr.length; i++) {
      if(callback(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
};

// example code to test your function with:
var isOdd = function(num) {
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]
