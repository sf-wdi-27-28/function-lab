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
// I'm processing considerably more numbers than I'm using... but after really struglling with this one, this approach worked!!!
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
// Honestly math is not my strong suit and I really wasn't able to figure this one out, I think due to a lack of a complete understanding of what primes even are.

// primes(max)
// reliant on isPrime()
