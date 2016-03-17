// maxOrMin(num1, num2, max)

// Define a function maxOrMin that takes three parameters: two numbers and a boolean.
// Have it return the larger of the two numbers if the boolean is true, otherwise have it return the
// lesser of the numbers.

function maxOrMin(num1, num2, max) {
    if (max) {
      return (num1 > num2)?num1:num2;
    } else {
      return (num1 < num2)?num1:num2;
    }
}

// sillySum(arr)

var sillySum = [2, 4, 5, 6];
var result = 0;

for (i = 0; i < sillySum.length; i++) {
  result += i * sillySum[i];
}

console.log(result);

// sillySum(arr) - Alt: return new array with each number times it's index

var oldArray = [1, 2 ,3, 4, 5];

function sillySum(oldArray) {
    return oldArray.map(function callback(element, index) {
      return element * index;
    });
  }

sillySum(oldArray);


// isPrime(num)
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

isPrime(10);


//filter
// starter structure for our filter function
function filter(arr, callback) {
var filtered = [];
     for (var i = 0; i < arr.length; i++) {
         if (callback(arr[i])) {
            filtered.push(arr[i]);
         }
     } return filtered;
}

function isOdd(num) {
    return num % 2 !== 0;
}

filter ([5,7,9,33,4,5,7], isOdd);

/// or

function filter(arr) {

     return arr.filter(function (num) {
             if (num % 2 !== 0)
             return num;
           });
}

filter ([4,5,6,6,6,67,7,7,7]);


// you could also try using your isPrime function as the callback:


function filter(arr, callback) {
    var filtered = [];

     for (var i = 0; i < arr.length; i++) {
         if (callback(arr[i])) {
            filtered.push(arr[i]);
         }
     } return filtered;
}

function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
      }
    }
    return true;
}

filter ([5,7,9,33,4,5,7], isPrime);
