/*
sillySum(arr)
Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
count += (number * index)
*/

function sillySum(arr){
  var result = arr.reduce(function multByIndex(a, b) {
    return a + (b * arr.indexOf(b)); });
  return result;
}

sillySum([2, 2, 3, 4, 5]);


//for loop variation of sillySum
function sillySum1(arr){
  var sum = 0;
  for(var i=0; i<arr.length; i++){
    sum += arr[i] * i;
  }
return sum;
}

sillySum1([1, 2, 3, 4, 5]);

/*
isPrime(num)
Create a function that returns true if the number passed in is a prime number and false if not.
(has no divisors other than itself (and 1).)
*/

function isPrime(num){
//check for edge case - smallest prime number
  if(num === 2){
    return true;
  }
  //check if there are positive divisors other than 1 and itself
  for(var i=2; i<num; i++){
       if(num % i === 0) {
       return false;
    }
  }
//check that num is a positive number greater than 1
  if(num > 1){
    return true;
  }
  else {
    return false;
  }
}

isPrime(9);

/*
filter takes in an array and another function (a callback).
The callback for filter will take in a number and return true or false (like isPrime does!).
Your filter function should create a new array. The filter function should use the callback on each element
of the original array. When the callback returns true for an element, filter should add that element
to the new array. Make filter return the new array at the end!
*/

function filter(arr, callback) {
  var newArray=[];
  for(var i=0; i<arr.length; i++){
      if(callback(arr[i])){
        newArray.push(arr[i]);
      }
  }
  return newArray;
}


var isOdd = function(num) {
  return num % 2 !== 0;
};
console.log(filter ([0,1,2,3,4,5], isOdd));
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
console.log(filter ([8,6,7,5,3,0,9], isPrime));
// returns [7,5,3]
