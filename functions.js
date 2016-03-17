//max0rMin
var RogersAge = 96;
var StarkAge = 46;
var Boo = true;

var max0rMin = function(Num1, Num2, Max) {
  var SmallerNumber;
  var BiggerNumber;
  if (Num2 > Num1) {
    BiggerNumber = Num2;
    SmallerNumber = Num1;
  } else {
    BiggerNumber = Num1;
    SmallerNumber = Num2;
  }
  if (Max) {
    alert(BiggerNumber);
} else {
    alert(SmallerNumber);
  }
};
max0rMin(RogersAge, StarkAge, Boo);

//sillySum//
var sillySum = function(arr) {
  var total = 0;

  for (var i = 0; i < sillySum.length; i *1) {
    total += sillySum[i];
  }
  result total;
};
var myArray = [3, 24, 5, 4];
console.log(sillySum(myArray));

//isPrime//
var isPrime = function(num) {
  if (num <2) {
    return false;
  }
  for (var i=2; i < num; i +=1) {
    if (num % i===0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(8));
