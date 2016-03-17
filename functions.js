// maxOrMin
function maxOrMin(num1, num2, bool) {
  if(bool) {
    return (num1 > num2)?num1:num2;
  } else if (!bool) {
    return (num1 < num2)?num1:num2;
  }
}

maxOrMin(6, 2, false);

//sillySum(arr)

var randomNumbers = [1, 5, 3, 10, 9];

function sillySum(array) {
   return array.map(function newArrayFunction(currentValue, index) {
       return currentValue + (currentValue * index);
   });
}

sillySum(randomNumbers);
