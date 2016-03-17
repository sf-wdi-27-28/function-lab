
//maxOrMin

maxOrMin(num1, num2, max);
  if(max) {
    if(num1 > num2) {
      return num1;
  }

   else {
    return num2;
  }
}
  else {
    if(num1 < num2) {
      return num2;
    } else {
      return num1;
    }
  }

maxOrMin(4, 3, max);

//sillySum

  function sillySum(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i] * i;
  }
  return sum;
}

var myArray = [2,3,4];
sillySum(myArray);

//isPrime

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


//filter **HELP! went to solutions

var filter = function(arr, callback) {
  var newArr = [];
    for(var i=0; i<arr.length; i++) {
      if (callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
  return newArr;
}

var isOdd = function(num) {
	return num % 2 !== 0;
};

filter ([0,1,2,3,4,5], isOdd);


filter ([8,6,7,5,3,0,9], isPrime);
