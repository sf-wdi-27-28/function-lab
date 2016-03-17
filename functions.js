// 1.
function maxOrMin(num1, num2, max) {
  var maxNumber = Math.max(num1, num2);
  var minNumber = Math.min(num1, num2);
  if (max === true) {
    return maxNumber;
  } else {
    return minNumber;
  }
}

console.log(maxOrMin(4, 5, true));

// 2.
function sillySum(arr) {
  var sum = 0;
  for (i=0; i<arr.length; i++) {
    sum += arr[i] * i;
  }
  return sum;
}

console.log(sillySum([2, 4]));

//3
function numSquare(max) {
  var arrayOfPerfectSquares = [];
  for (i=0; i<=max; i++) {
    if ((Math.sqrt(i)) %1 === 0) {
      arrayOfPerfectSquares.push(i);
    }
  }
  return arrayOfPerfectSquares;
}

console.log(numSquare(20));

//4.is Prime
function isPrime(num) {
  var isItPrime = true;
  for (i=2; i < 100; i++) {
    if (num % i === 0 && i !== num) {
      isItPrime = false;
    } else {}
  }
  return isItPrime;
}
console.log(isPrime(10));

//5.
function primes(max) {
  var arrayOfPrimes = [];
  for (i=2; i <= 100; i++) {
    if(isPrime() === false) {
    } else {
      arrayOfPrimes.push(i);
    }
  }
  return arrayOfPrimes;
}

console.log(primes(100));

//6. filter

function filter (arr, callback) {
  var arrayOfTureNumbers = [];
  if (callback() === ture) {
    arrayOfTureNumbers.push(number);
  }
}

function isNumberOdd(number) {
  if (number % 2 !== 0) {
    return number;
  }
}

console.log(fileter(7));

// // example code to test your function with:
// var isOdd = function(num) {
//  return num % 2 !== 0;
// };
// filter ([0,1,2,3,4,5], isOdd);
//
// // returns [1, 3, 5]
//
// // you could also try using your isPrime function as the callback:
// filter ([8,6,7,5,3,0,9], isPrime);
// // returns [7,5,3]
