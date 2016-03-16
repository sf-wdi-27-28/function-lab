// YOUR CODE HERE
//maxOrMin(num1, num2, max)
function maxOrMin(num1, num2, max) {
  if (max) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  } else {
    if (num1 > num2) {
      return num2;
    } else {
      return num1;
    }
  }
}

//sillySum(arr)
function sillySum(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i] * i);
  }
}

//numSquare(max)
function numSquare(max) {
  squares = [];
  for (var i = 1; (i*i <= max); i++) {
    squares.push(i*i);
  }
  console.log(squares);
}

//isPrime(num)
function isPrime(num) {
  if (num === 0) {
    return false;
  }
  var i = 2;
  while (i < num) {
    if ((num % i === 0)) {
      return false;
    } else {
      i ++;
    }
  }
  return true;
}

//primes(max)
function primes(max) {
  primesarray = [];
  for (i = 1; i < max; i++) {
    if (isPrime(i)) {
      primesarray.push(i);
    }
  }
  return primesarray;
}

//filter
var filter = function(arr, callback) {
  filteredNums = [];
  for (i = 0; i < arr.length; i ++) {
    if (callback(arr[i])) {
      filteredNums.push(arr[i]);
    }
  }
  return filteredNums;
};
