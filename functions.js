// ### maxOrMin(num1, num2, max)
// Define a function maxOrMin that takes three parameters: two numbers and a
// boolean. Have it return the larger of the two numbers if the boolean is true,
// otherwise have it return the lesser of the numbers.

function maxOrMin(a, b, boolean) {
  // if boolean is true & a is greater than b, return a
  if ( (boolean) && (a > b) ) {
    return a;
  // if boolean is true & b is greater than a, return b
  } if ( (boolean) && (b > a) ) {
    return b;
  // if boolean is not true & a is less than b, return a
  } else if ( (!boolean) && (a < b) ) {
    return a;
  // if boolean is not true & b is less than a, return b
  } else if ( (!boolean) && (b < a) ) {
    return b;
  }
}

maxOrMin(1, 2, "");

// ### `sillySum(arr)`
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

// count += (number * index)
// Solution 1
var sillyArray = [2, 4, 5, 6];
var result = 0;
//start at 0, stop after array goes beyond array length, iterate by +1
//input element and multiply by its index value
function sillySum(array) {
for (i = 0; i < sillyArray.length; i++) {
  result += i * sillyArray[i];
}

console.log(result);

  }
};

// Solution 2
var sillyArray = [1, 6, 2, 7, 9]

function sillySum(arr){
		return arr.map(function callback(element, index) {
			return element + (element * index)
		});
}

sillySum(sillyArray);

// take array
// return sum of each element's (number * index)
// prime number = num not divisible by any number except 1 or itself

// ### numSquare(max)
// Create a function called numSquare that will return an array of all perfect
// square numbers up to, but not exceeding a max number.
// Perfect squares: 4, 9, 16, 25, 36, 49, 64, 81
//
var numSquare = function(x, y) {
// if x*x = y (ex, 2*2 = 4) and not max number, return array, print array
  if ( (x*x === y) && !number.MAX_VALUE ) {
    return array;
    console.log(array);
  }
}

// ### `isPrime(num)`
// Create a function that returns true if the number passed in is a prime number
// and false if not.
// if prime, return true
// if not prime, return false
function isPrime(num) {
	if (num < 2) {
		return false;
// if number is less than 2, return false, handles corner case
	}
for (var i = num-1; i > 1; i--) {
	if (num % i === 0) {
		return false;
// start at number less 1, stop when number is greater than 1, decrement by -1
	}
}
	return true;
// all other cases, return true, should be a prime number
};

isPrime(3);


// ### `filter`
// Write a function called `filter` that filters elements of an array based on a callback function.
// `filter` takes in an array and another function (a callback).  The callback for `filter` will take in a number and return
// `true` or `false` (like `isPrime` does!).
// Your `filter` function should create a new array. The `filter` function should use the callback on each element of the
// original array. When the callback returns true for an element, `filter` should add that element to the new array. Make
// `filter` return the new array at the end!


// example code to test your function with:
function isOdd(num) {
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
