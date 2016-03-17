/*

### `maxOrMin(num1, num2, max)`

Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers
 if the boolean is true, otherwise have it return the lesser of the numbers.
*/

function maxOrMin(x,y,bool) {
  if (bool) {
    if (x > y) {
      return x;
    }
    return y;
  }
    if (x>y) {
      return y;
    }
    return x;
}

maxOrMin(5,4,false);

// ### `sillySum(arr)`
//
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

var numbersArray = [1,2,3,4];
var count = 0

numbersArray.forEach(function callBack(element, index) {
    count += (element*index);
});

console.log(count)


// ### `numSquare(max)`
//
// Create a function called `numSquare` that will return an array
//of all perfect square numbers up to, but not exceeding a max number.

var squaresArray = [];
squares(20)
function squares(max) {
  for (var i=1; i <= max; i++) {
    squaresArray.push(i*i);

  }
}
console.log(squaresArray);


### `isPrime(num)`

Create a function that returns true if the number passed in is a prime number and false if not.

### `primes(max)`

Using your `isPrime` function, create a function
primes that will return an array of all prime numbers up to,
but not exceeding a max number.

### `filter`

Write a function called `filter` that filters elements of an array based on a callback function.

`filter` takes in an array and another function (a callback).  The callback for `filter`
will take in a number and return `true` or `false` (like `isPrime` does!).
Your `filter` function should create a new array. The `filter` function should use the
callback on each element of the original array. When the callback returns true for
an element, `filter` should add that element to the new array. Make `filter` return the new array at the end!

//the following is bad code but I need help with it. I looked at the solution
//and can see where I went wrong.


var filter = function(arr, callback) {
//  arr.forEach(callback(element))
  if (true) {
      console.log(item);

  }
}

// example code to test your function with:
var isOdd = function(num) {
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]
console.log(filter);

// you could also try using your isPrime function as the callback:
// filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
