// YOUR CODE HERE
//1. `maxOrMin(num1, num2, max)`

<!-- Define a function `maxOrMin` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers. -->

'use strict'

function maxOrMin(n1, n2, cb){
     var res = cb(n1, n2);
     return res;
}
function ifMax(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

function sayTaco(){
    alert('taco');
}

maxOrMin(1, 2, ifMax);
maxOrMin(1,3, sayTaco);


//2. ### `sillySum(arr)`


a = [1, 2, 3, 4]

function sillySum(arr){
    return arr.map(function (element, index){
        return element + (element * index);
    })
}
sillySum(a);

//3. ### `numSquare(max)`


var numSquare = function(max) {
  var squaresArr = [];

  for (var i = 0; i <= max; i += 1) {
    if (Math.sqrt(i) % 1 === 0) {
      squaresArr.push(i);
    }
  }
  return squaresArr;
};

numSquare(100);


//4. ### `isPrime(num)`

Create a function that returns true if the number passed in is a prime number and false if not.
var isPrime = function(num){
    if(num < 2){
        return false;
    }
    for(var i = 2; i <= num; i++){
        if(num % i === 0){
            return false;
        } else {
            return true;
        }
    }

}
isPrime(7);

//5. ### `primes(max)`

Using your `isPrime` function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.

var prime = function(max){
    for(i = 2; i < max; i+=1){
        if(isPrime(i) === true){
            console.log(i);
        }
    }
}

prime(100)
