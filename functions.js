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

//numSquare(max)

function numSquare(max) {
  var squaredArray = [];
  for (i = 0; i < max; i++) {
    var square = i * i;
    if (square <= max) {
        squaredArray.push(square);
    }
  }
  return squaredArray;
}

numSquare(100);

// function takes number
// genertate perfect squares as long as they are <= the number
//push the perfect squares into an array
//return array
