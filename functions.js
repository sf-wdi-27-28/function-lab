function sillySum(arr){
  var count = 0;
  arr.forEach(function (number, index){
    count += (number * index);
  });
  return count
}

function isPrime(x){
    if(x < 2){
        return false;
    }
    for(var i = 2; i < x; i ++){
        if(x % i === 0){
            return false;
        }
    }
    return true;
}

// starter structure for our filter function
var filter = function(arr, callback) {
  var newArr = [];
  for(var i = 0; i < arr.length-1; i ++){
    if(callback(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr
}

// example code to test your function with:
var isOdd = function(num) {
  return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
