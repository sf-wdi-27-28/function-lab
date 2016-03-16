//1. maxOrMin(num1, num2, max)
/*Declare function maxOrMin(numberOne, numberTwo, bool) that returns
larger of the two numbers if bool is true, otherwise the lesser of
the two numbers*/

function maxOrMin (a, b, bool) {
  if (bool === true) {
    if (a > b) {
      return a;
    } else return b;
  } else if (bool === false) {
    if (a < b) {
      return a;
    } else return b;
  }
}

//2. sillySum(arr)
/*Takes array of numbers and returns sum of each number multiplied by its
index.*/

function sillySum(arr) {
  
}
