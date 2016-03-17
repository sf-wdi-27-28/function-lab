// YOUR CODE HERE

//maxOrMin function
function maxOrMin(num1, num2, isMax) {
  //set the max
  var maxNumber = Math.max(num1, num2);
  //set the min
  var minNumber = Math.min(num1, num2);

  if (isMax === true) {
    return maxNumber;
  } else {
    return minNumber;
  }
}

maxOrMin(5, 10, true);


//sillySum function
function sillySum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    total += arr[i] * i;
  }
  return total;
}

sillySum([0, 1, 2, 3, 4]);


//numSquare(max)

function numSquare(max) {
  var squareArray = [];
  for (i = 0; i < max; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      squareArray.push(i);
    }
  }
  return(squareArray);
}

numSquare(18);


//isPrime(num)

var isPrime = function(num) {

//0 and 1 can't be prime numbers
  if (num < 2) {
    return false;
  }

//Check all numbers from 2 to num and see if num is even divisible by them. If so, return false
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

isPrime(16);


//primes(max)

var isPrime = function (num) {

//0 and 1 can't be prime numbers
  if (num < 2) {
    return false;
  }

//Check all numbers from 2 to num and see if num is even divisible by them. If so, return false
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

function primes(max) {
  var primeArray = [];

  //Check all numbers from 2 to nmax and see if they are prime using isPrime. If they are, add them to primeArray
  for (var i = 2; i < max + 1; i++) {
    if (isPrime(i) === true) {
      primeArray.push(i);
    }
  }
  return(primeArray);
}

primes(5);


//filter

var filter = function(arr, callback) {
// YOUR CODE IN HERE!
  var filterArray = [];
  for (i = 0; i < arr.length; i++) {
    if (callback(i)) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
};

var isOdd = function(num) {
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);


//filter with isPrime

var filter = function(arr, callback) {
// YOUR CODE IN HERE!
  var filterArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
};

var isPrime = function(num) {

//0 and 1 can't be prime numbers
  if (num < 2) {
    return false;
  }

//Check all numbers from 2 to num and see if num is even divisible by them. If so, return false
  for (var j = 2; j < num; j++) {
    if (num % j === 0) {
      return false;
    }
  }
  return true;
};
filter ([3,8,6,7,5,0,9], isPrime);
