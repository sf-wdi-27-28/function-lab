// YOUR CODE HERE
function maxOrMin(num1, num2, max){
    if(num1 === num2){
        return "Both your numbers are eqaul value!";
    }if(max === true){
        if(num1 > num2){
            return num1;
        }else return num2;
    }else if (max === false){
        if(num2 > num1){
            return num2;
        }else console.log("Error, Enter correct parameters!");
    }

}
maxOrMin(10,2,true);
//I was finding it hard to know when to use variables, its something
//im still trying to grasp a hold of.
var arr = [1,2,3,4];

function sillySum(arr){
    var count = 0;
     for(var i = 0; i < arr.length; i++){
         count += (arr[i] * i);

     }
    return count;
}

sillySum(arr);

// Was tough mainly due to my lack of math in the past 10 years
//more help understanding the logic of functions more simply.
function numSquare(max){
   var myArray = [];
   for(var i = 1; i <= max; i++){
       var num = 0;
       num = i * i;
       myArray.push(num);
   }
   return myArray;
}

numSquare(4);

// This was challanging, mainly revisiting math. I also have
//a little trouble knowing what to return sometimes.
function isPrime(num){
    if(num < 2){
        return false;
    }else {
        for(var i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }else return true;
        }
    }
}
isPrime(4);
