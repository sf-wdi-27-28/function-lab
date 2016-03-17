// Functions Lab

var maxBoolean;
var number1=5;
var number2=12;
function maxOrMin(maxBoolean, number1, number2) {
    var numSort = [number1, number2].sort(function(a, b){
      return a - b;
    });
    if(maxBoolean) {
        return numSort[1];
    }
    else {
        return numSort[0];
    }
}
maxOrMin();

______________________________________________________




var myArray = [5,6,7,12,54];
function sillySum(myArray) {
  var final = 0;
  for (var i = 0; i < myArray.length; i++) {
    final += myArray[i] * i;
  }
  return final;
}
sillySum(myArray);

______________________________________________________


function primeNumber(number) {
  if (number<2) {
    return false;
  }
  for (var count=2; count <number; count++) {
    if (number%count=== 0) {
      return false;
    }
  }
  return true;
}
primeNumber(97);                //true
primeNumber(91);                //false

______________________________________________________



function primeNumber(num) {
  if (num<2) {
    return false;
  }
  for (var count = 2; count < num; count++) {
    if (num % count === 0) {
      return false;
    }
  }
  return true;
}
function primes(max) {
  for (var count = 2; count <= max; count++) {
    if (primeNumber(count) === true) {
      console.log(count);
    }
  }
}
primes(7);                  //2,3,5,7


____________________________________



function filter(arr, callback) {
  var myArray = [ ];
    for(var i=0; i<arr.length; i++) {
      if (callback(arr[i])){
        myArray.push(arr[i]);
      }
    }
  return myArray;
}

function isOdd(number) {
	return number % 2 !== 0;
}
filter ([45,97,2,7,91,500], isOdd);           //[ 45, 97, 7, 91 ]
