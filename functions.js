// YOUR CODE HERE
//sillySum(arr)
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
// count += (number * index)
function sillySum(array){
  var sum = 0;
  for (var i = 0; i < array.length; i += 1) {
    sum += array[i] * i;
  }
  return sum;
}

//isPrime(num)
// Create a function that returns true if the number passed in is a prime number and false if not.
function isPrime(number){
  if( (number % 2 === 0) && (number !== 2) ){
    return false;
  }else{
  return true;
}
}

// filter
// Write a function called filter that filters elements of an array based on a callback function.
// filter takes in an array and another function (a callback). The callback for filter will take in a number and return true or false (like isPrime does!). Your filter function should create a new array. The filter function should use the callback on each element of the original array. When the callback returns true for an element, filter should add that element to the new array. Make filter return the new array at the end!

// starter structure for our filter function
var filter = function(array, callbackFunction){
  var secondArray = []; //creates new array
  for(var i = 0; i < array.length; i++){ //loops through parameter array
    if(callbackFunction(array[i])){ //puts the parameter array into the callback functin
      secondArray.push(array[i]); //creates a new item at the end of the new array created from the parameter array
    }
  }
return secondArray; //returns the new array with new values.
};

var isOdd = function(numOdd) {
  return numOdd % 2 !== 0;
};
filter ([0,1,2,3,4,5], isOdd);
// returns odd numbers

function isPrime(numEven){
  return numEven % 2 === 0;
}
filter ([8,6,7,5,3,0,9], isPrime);
// returns even numbers
