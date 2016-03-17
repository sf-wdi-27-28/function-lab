// 1.) ### `maxOrMin(num1, num2, max)`
function maxOrMin(num1, num2, max){
  if(max) {
    return Math.max(num1,num2);
  } else {
    return Math.min(num1,num2);
  }
}
maxOrMin(556,665,(1>2));
maxOrMin(556,665,(1<2));
//not sure if I should be using these

// 2.)### `sillySum(arr)`
function sillySum(arr) {
  var result = 0;
  for(var i = 0; i < arr.length; i++) {
    result += arr[i] * i;
  }
  return result;
}
var numbers = [14, 11, 6, 2, 1];
sillySum(numbers);

// 3.)### `numSquare(max)`
function numSquare(max) {
  perfSquares=[];
  for(var i = 0; i <= max; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      perfSquares.push(i);
    }
  }
return perfSquares;
}
console.log(numSquare(145));

// 4.)### `isPrime(num)`
function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(4));
console.log(isPrime(7));

// 5.)### `primes(max)`
function primes(max) {
  var listPrimes = [];
  for(var i = 2; i <= max; i++) {
    if (isPrime(i) === true) {
      listPrimes.push(i);
    }
  }
  console.log(listPrimes);
}
primes(30);

// 6.) ### `filter`
function filter(arr, callback) {
  var newArr = [];
  for(var i=0; i<arr.length; i++) {
    if (callback(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

filter([0,1,2,3,4,5], function isOdd(num) {
  return num % 2 !== 0;
});
filter([8,6,7,5,3,0,9], isPrime);
