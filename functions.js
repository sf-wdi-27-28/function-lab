// FUNCTION LAB HW

//1.
function maxOrMin(num1, num2, max){
    if (max === true){
        return(num1 > num2 ? num1 : num2);
    }
    else if (max === false){
        return(num1 < num2 ? num1 : num2);
    }
    else {
        console.log("error");
    }
}

//2.
var sampleArray = [1, 2, ,3, 4, 5 ,6, 7];

function sillySum(arr){
    return arr.map(function callBack(element, index){
        return element + (element * index)
    });
}

sillySum(sampleArray);

//4.

function isPrime(num){

    if(num < 2){
        return false;
    }
    for (var i = num - 1 ; i > 1; i--){
        if( num % i === 0){
            return false;
        }
    }
    return true;
}

//6.
function filter(arr, callBack){
    return newArr = arr.filter(callBack);
}
