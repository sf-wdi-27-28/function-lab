//w1 d3
//Morgan Sharif

//# Functions Drills Lab

//Practice creating functions!

//1. `maxOrMin(num1, num2, max)`
//    Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.

function maxOrMin(num1, num2, bool){return (bool) ? Math.max(num1, num2) : Math.min(num1, num2);}

maxOrMin(4, 5, true);

//2. sillySum(arr)`
//  Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

function sillySum(array){
  return array.map(function sumOfSelfAndIndex(currVal, index){
    return currVal + (currVal * index);
  });
}

sillySum([2,1,4,5,7,11,2,4,6]);
//returns [2, 2, 12, 20, 35, 66, 14, 32, 54]

//3.  `numSquare(max)`
//    Create a function called `numSquare` that will return an array of all perfect square numbers up to, but not exceeding a max number.

function numSquare(max){
  perfSquares = []
  for (var i = 1; i <= max; i++){
    if (i % Math.sqrt(i) === 0 ){
       perfSquares.push(i);
    }
  }
  return perfSquares;
}

numSquare(37);
// returns [1, 4, 9, 16, 25, 36]


//4.  `isPrime(num)`
//    Create a function that returns true if the number passed in is a prime number and false if not.

function isPrime(num){
  if (num < 2){
    return false;
  }
  for (var i = 2; i < num; i++){
    if (num % i === 0){           //divide by each i leading up to num to check for remainders (i.e, 'not a prime')
      return false;
    }
  }
  return true;                    //loop concludes and num is a prime number
}

isPrime (65);

//5.  `primes(max)`
//    Using your `isPrime` function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.

function primes(max){
  var primeList = [];
  for (var i = 1; i < max; i++){
    if (isPrime(i)){
      primeList.push(i);
    }
  }
  return primeList;
}

primes(104);
//returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103]

//6   `filter`

//     Write a function called `filter` that filters elements of an array based on a callback function.
//    `filter` takes in an array and another function (a callback).  The callback
//     for `filter` will take in a number and return `true` or `false` (like `isPrime` does!).
//     Your `filter` function should create a new array. The `filter` function
//     should use the callback on each element of the original array. When the callback
//     returns true for an element, `filter` should add that element to the new array.
//     Make `filter` return the new array at the end!



// starter structure for our filter function
var filter = function(arr, callback) {
  filteredArr =[];
  for (var i = 1; i < arr.length; i++){
    if (callback(arr[i])){            // passes the array's value (using array[i]), and if true, gets added to the new list
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
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
