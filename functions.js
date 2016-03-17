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
//
// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
//
// count += (number * index)
