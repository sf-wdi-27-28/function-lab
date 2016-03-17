// maxOrMin(num1, num2, max)
// This works but it's pretty smelly:

function maxOrMin(num1, num2, max){
    if ( max && (num1 > num2) ){
        return num1;
    } else if ( max && (num1 < num2) ){
        return num2;
    } else if ( max && (num1 > num2) ){
        return num2;
    } else {
        return num1;
    }
}

maxOrMin(5,4,false);

//sillySum(arr)
// Got really stuck on this one, had hasBeenSummed equal to 0 instead of an empty array.

function sillySum(arr){
  var hasBeenSummed = [];
  arr.forEach(function sum(elem, index) {
    hasBeenSummed.push (elem * index);
  });
  return (hasBeenSummed);
}

console.log(sillySum([2,4,6,8]));

// numSquare(max)
// I'm pretty sure there's a better way of doing this -
// I'm processing considerably more numbers than I'm using... but after really struggling with this one, this approach worked!!!
// Kinda lol'ing at it's ridiculousness, though.

function numSquare(max){
  var hasBeenSquared = [];
  function stoppingPoint(value){
      return value <= max;
  }
  for (i = 0; i < max; i++){
    if ( (i * i))
    hasBeenSquared.push (i * i); // creates an array of every number <= max, squared. In other words, if max is 100, there will be 100 values in the array. Yikes.
  }
  return (hasBeenSquared.filter(stoppingPoint)); //chops off every value past max from the array
}

console.log(numSquare(100));

// isPrime(num)

function isPrime(num){

  for (i = 2; i < num; i++) {  // can't start loop at 0 or 1 bc it will give a false response
    if (num % i === 0){
      return false;
    } else {
      return true;
    }
  }
}

isPrime(7);

// primes(max)
// reliant on isPrime(), can't do.


// filter
var filter = function filterer(arr, callback) {
  var filteredArray = [];
  for (var i = 0; i < arr.length; i++){
    if (callback (arr[i]) ){
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

// example code to test your function with:
var isOdd = function(num) {
    return num % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]
