//1. maxOrMin(num1, num2, max)
/*Declare function maxOrMin(numberOne, numberTwo, bool) that returns
larger of the two numbers if bool is true, otherwise the lesser of
the two numbers*/

function maxOrMin (a, b, bool) {
  if (bool === true) {
    if (a > b) {
      return a;
    } else return b;
  } else if (bool === false) {
    if (a < b) {
      return a;
    } else return b;
  }
}

//2. sillySum(arr)
/*Takes array of numbers and returns sum of each number multiplied by its
index.*/


var sillySum = [2, 4, 5, 6];
var result = 0;

for (i = 0; i < sillySum.length; i++){
    result += i * sillySum[i];
}

console.log(result);

//4. isPrime
//Note: we don't know why the "return true;'' lies outside the 'for-loop'; if we
  //included it in the loop, it stopped working.

function isPrime(input) {
  if (input < 2) {
    return false;
  }
  for (var i = input-1; i > 1; i--) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}


// filter

function filter(arr, callback) {
  return filteredArray = arr.filter(callback);
}
