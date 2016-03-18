//1
function maxOrMin (num1, num2, max){
  //check if max is true. else return min.
  if(max){
//checking for max variable
    if(num1<num2){
      return num2;
    }else if(num1>num2) {
      return num1;
    }
  } else {
    if(num1<num2){
      return num1;
    }else if (num1>num2){
      return num2;
    }
  }
}
maxOrMin (1,2,true);


//2
sillySum = function (arr) {
  var x = 0;
  for (var i = 0; i < arr.length; i++) {
    x += ( arr[i] * i);}
    return x;
  };
var qTwoArray = [1,2,3];
sillySum(qTwoArray);


//3
var isPrime = function(num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};


//6
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
