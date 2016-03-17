// YOUR CODE HERE
### `maxOrMin(num1, num2, max)`

Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.

ffunction maxOrMin(x,y,z){
 if ( z == true){
     console.log("its true!");
   if ( x < y){
     return y;
   } else return x;

 }
 console.log("it's false");
}
maxOrMin(6,4,true);




### `sillySum(arr)`
// YOUR CODE HERE
var myArray=[1,4,5];
var multi = 0;


for (var i = 0; myArray.length > i; i++){

   multi += (myArray[i] * i); // I made syntax error here. because of () I spent hours! I better learn from it :)
}

console.log(multi);


### `numSquare(max)`

Create a function called `numSquare` that will return an array of all perfect square numbers up to, but not exceeding a max number.

var myArray=[1,2,3,4];
var squareArray=[];
var square;
function numSquare(y){
  for (var i=0; i < myArray.length; i++){ // SYNTAX ERRORS!
   if ( y < myArray[i]) {
    square = myArray[i] * myArray[i];
    squareArray.push(square);
    console.log(square);
    }
    else console.log("number is bigger");
}
console.log(squareArray);

}
numSquare(3);

### `isPrime(num)`

Create a function that returns true if the number passed in is a prime number and false if not.

function isPrime(num){
  if (num % num ===0){
    return true;

  } else
  return false;
}

### `primes(max)`

Using your `isPrime` function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.

// working on it
var ilter = [1,2,3,4];
var ilter2 = [];
var ilter3=[];
//for (i = 0; i < ilter.length; i++){}

ilter.forEach(function isPrime(element){
  if (element % element === 0){
ilter2.push(element);


}
else ilter3.push(element);



  });
console.log(ilter2);
console.log(ilter3);
