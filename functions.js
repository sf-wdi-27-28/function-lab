// YOUR CODE HERE
var array=[1,2,3];
function sillySum(arr) {
  var sum=0;
  for (var i=0;i<arr.length;i++){
  sum += arr[i]*i;
}
  return sum;
}
console.log(sillySum(array));

function isPrime(num) {
for (var i = 2; i <= Math.sqrt(num); i++) {
   if (num % i === 0) {return false;}
   else {return true}
}
}
console.log(isPrime(29));


function filter(array, callback){
    var Result = [];
    for(i=0; i<array.length; i++){
    if(callback(array[i]))
    Result.push(array[i]);
    }
    return Result;
}


console.log(filter([2,5,7,8,10,11,13],isPrime))
