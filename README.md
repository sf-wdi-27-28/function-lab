# Functions Drills Lab

Practice creating functions!

### `maxOrMin(num1, num2, max)`

<!-- Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers. -->

'use strict'

function maxOrMin(n1, n2, cb){
     var res = cb(n1, n2);
     return res;
}
function ifMax(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

function sayTaco(){
    alert('taco');
}

maxOrMin(1, 2, ifMax);
maxOrMin(1,3, sayTaco);


### `sillySum(arr)`

Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.


a = [1, 2, 3, 4]

function sillySum(arr){
    return arr.map(function (element, index){
        return element + (element * index);
    })
}
sillySum(a);

`count += (number * index)`

### `numSquare(max)`

Create a function called `numSquare` that will return an array of all perfect square numbers up to, but not exceeding a max number.

var numSquare = function(max) {
  var squaresArr = [];

  for (var i = 0; i <= max; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresArr.push(i);
    }
  }
  return squaresArr;
};

numSquare(100);

### `isPrime(num)`

Create a function that returns true if the number passed in is a prime number and false if not.
var isPrime = function(num){
    if(num < 2){
        return false;
    }
    for(var i = 2; i <= num; i++){
        if(num % i === 0){
            return false;
        } else {
            return true;
        }
    }

}
isPrime(7);

### `primes(max)`

Using your `isPrime` function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.

var prime = function(max){
    for(i = 2; i < max; i+=1){
        if(isPrime(i) === true){
            console.log(i);
        }
    }
}

prime(100)

### `filter`

Write a function called `filter` that filters elements of an array based on a callback function.  

`filter` takes in an array and another function (a callback).  The callback for `filter` will take in a number and return `true` or `false` (like `isPrime` does!).
Your `filter` function should create a new array. The `filter` function should use the callback on each element of the original array. When the callback returns true for an element, `filter` should add that element to the new array. Make `filter` return the new array at the end!

```js
// starter structure for our filter function
var filter = function(arr, callback) {
// YOUR CODE IN HERE!

}

// example code to test your function with:
var isOdd = function(num) { 	
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
```
