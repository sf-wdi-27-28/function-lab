// maxOrMin(num1, num2, max)
// Define a function maxOrMin that takes three parameters: two numbers and a boolean.
// Have it return the larger of the two numbers if the boolean is true,
// otherwise have it return the lesser of the numbers.

function maxOrMin(num1, num2, max) {
    if (max) {
        return (num1 > num2) ? num1:num2;
    }
    else {
        return (num1 > num2) ? num2:num1;
    }
}

maxOrMin(4, 6, false);


// sillySum(arr)
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
// count += (number * index)

function sillySum(numberArray) {
    var total = 0;
        for (var i = 0; i < numberArray.length; i++) {
            total += numberArray[i] * i;
        }
        return total;
}

 sillySum([4, 8, 3, 6]);

 //isPrime(num)
 //Create a function that returns true if the number passed in is a prime number and false if not.

 function isPrime(x) {
    for (var i = 2; i < x; i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true;
}

isPrime(49);
