// YOUR CODE HERE
//### `maxOrMin(num1, num2, max)`
function maxOrMin(num1, num2, max) {
    if( max === true) {
        if( num1 > num2) {
            return num1;
        } else {
            return num2;
        }
    } else {
        if ( num1 > num2) {
            return num2;
        } else if (num1 < num2) {
            return num1;
        }
    }
}

maxOrMin(5, 12, true);

// => 12


//### `numSquare(max)`
function numSquare(max, callB) {
    var newArr = [];
    for (var i = 0; i <= max; i++) {
        newArr.push(callB(max[i]));
    }
    return newArr;
}

function squareIt(num) {
    Math.pow(2,num);
}

numSquare(3, squareIt);
//=> this function outputs an error!?!?!

//### `sillySum(arr)`
function sillySum(arr) {
    var count = 0;
    for(var i = 0; i < arr.length; i++) {
        count += (arr[i] * i);
    }
    return count;
}

sillySum([1,2,3,4]);

// => 20




//###`isPrime(num)`

function primes(num) {
    if( num % 2 !== 0 && num % 3 !== 0) {
        return true;
    } else {
        console.log(false);
    }
}

primes(7);

// => true

//###'filter'
function filter(arr, cbFunc) {
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(cbFunc(arr[i]));
    }
    return newArr;
}

function callback(num) {
    if( num % 2 !== 0 && num % 3 !== 0) {
       return num;
    } else {
       return console.log("false");
    }
}



filter([5,9,7], callback);
// => [5,8,7]
