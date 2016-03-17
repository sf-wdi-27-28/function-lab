// YOUR CODE HERE

// maxOrMin(num1, num2, max)
function maxOrMin(num1, num2, max) {
  if (num1 > num2 && max === true) {
    return num1;
  } else if (num1 < num2 && max === true) {
    return num2;
  } else if (num1 > num2 && max === false) {
      return num2;
  } else return num1;
}

maxOrMin(3, 2, false);


//sillySum(arr)
var sillySum = function(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i += 1) {
    total += arr[i] * i;
  }
  return total;
};

var numArray = [12, 27, 32, 64, 128];
console.log(sillySum(numArray));


//isPrime(num)
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

isPrime(21);


//filter
// starter structure for our filter function
var filter = function(arr, callback) {
  var newArr = [];
    for(var i=0; i<arr.length; i++) {
      if (callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
  return newArr;
};

var isOdd = function(num) {
	return num % 2 !== 0;
};

filter ([0,1,2,3,4,5], isOdd);
