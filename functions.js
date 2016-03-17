// YOUR CODE HERE

//Silly Sum
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.

var sillySum = function(arr) {
    var result = 0;
    for (var i= 0; i < arr.length; i+= 1) {
    result += arr[i] * i;
}
    return result;
};

var myArray= [3, 9, 29, 32];
console.log(sillySum(myArray));





//is Prime

// Create a function that returns true if the number passed in is a prime number and false if not.

var isPrime = function(num) {
	if (num < 2) {
		return false;
	}
	for (var i = 2; i < num; i +=1) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};



//filter

//Write a function called filter that filters elements of an array based on a callback function.

//filter takes in an array and another function (a callback). The callback for filter will take in a number and return true or false (like isPrime does!). Your filter function should create a new array. The filter function should use the callback on each element of the original array. When the callback returns true for an element, filter should add that element to the new array. Make filter return the new array at the end!

//starter structure for our filter function
var filter = function(arr, callback) {
	var newArr = [];
	for(var i=0; i<arr.length; i++) {
		if (callback(arr[i])){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

// you could also try using your isPrime function as the callback:
filter ([8,6,7,5,3,0,9], isPrime);
//returns [7,5,3]