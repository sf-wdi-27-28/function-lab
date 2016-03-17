// YOUR CODE HERE
function maxOrMin(num1, num2, max){
    if (max){
        return Math.max(num1, num2);
    } else {
        return Math.min(num1, num2);
    }
}

//maxOrMin(12,15,1);

function sillySum(arr){
    count = 0;
    for (i = 0; i < arr.length; i++){
        count += (arr[i] * i)
    }
    return count
}

arr = [1,2,3,4,5]

//sillySum(arr);

function numSquare(max){
    arr = [];
    for(i = 0; i*i <= max; i ++){
        arr.push(i * i);
    }
    return arr;
}

//numSquare(47)

function isPrime(num){
    if (num < 2){
        return false;
    }
    for (i = 2; i < num; i++){
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

//isPrime(17);

function primes(max){
    var arr = [];
    for (var i = 0; i <= max; i++){
        if (isPrime(i) === true){
            arr.push(i);
        }
    }
    return arr;
}

function filter(arr, callback){
    filteredArr = [];
    for (var i = 0; i < arr.length; i++){
        if (callback(arr[i])){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
