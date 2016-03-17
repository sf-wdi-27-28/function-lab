//sillySum
// (Write a function that takes an array of numbers and returns the sum of each
//number multiplied by its index.)

var sillySum = [2, 4, 5, 6];
var result = 0;

for (i = 0; i < sillySum.length; i++){
result += i * sillySum[i];
}

console.log(result);


//isPrime
// (Create a function that returns true if the number passed in is a prime number and false if not.)

function isPrime(input) {
  if (input < 2) {
    return false;
  }
  for (i = input-1; i > 1; i--) {
  if (input % i === 0) {
    return false;
  }
}
  return true; // not sure why this only works when "return true" is outside
  // the conditional 
}
isPrime(2);


//filter
// (Write a function called `filter` that filters elements of an array based on a callback function.)
function filter(arr, callback) {
  return filteredArray = arr.filter(callback);
}

function isPrime(input) {
  if (input < 2) {
    return false;
  }
  for (i = input-1; i > 1; i--) {
  if (input % i === 0) {
    return false;
  }
}
  return true;
}

filter ([50, 49, 48, 47, 46], isPrime);
