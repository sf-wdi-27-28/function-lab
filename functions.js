// YOUR CODE HERE
//1. maxOrMin(num1, num2, max)
function maxOrMin(num1, num2, max){
  if(max){
    if(num1 <= num2){
      return num2;
    }
    else if(num2 <= num1){
      return num1;
    }
  }
  else if(num1<num2){
    return num1;
  }
  else{return num2}
  }
  maxOrMin(2,22,true);

//2. sillySum(arr)
var array = [1,2,3];
function sillySum(arr){
var count =0;
  for(var i =0; i <arr.length;i++){
  count +=  (arr[i]*i);
  }
  return count;
}
sillySum(array);

//3.numSquare(max)
function numSquare(max) {
  var sqArr = [];
  for (i = 1; i * i <= max; i += 1) {
    sqArr.push(i * i);
  }
  return sqArr;
}
numSquare(32);
//4. isPrime(num)
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

isPrime(9); // returns false
isPrime(7); // returns true

// last. starter structure for our filter function
var isOdd = function(num) {
  return num % 2 !== 0;
};
var filter = function(arr, callback) {
  var result = [];
  arr.forEach(function(x){
    if(callback(x)){
      result.push(x);
    }
  });
  return result;
}

filter([123,2345353,47,6867,754634524],isOdd);
