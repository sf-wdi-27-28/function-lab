// SillumSum(arr) >> Write a function that takes an array of numbers and returns the sum of each number multiplied by its index. ** comments.. having a lot of trouble understanding callback functions. tried googling mutliple resources, but still haven't found anything that's making sense of it for me. attempted all problems with aide of solution. :( attempting to comment to at least make sense of the steps ...

function  sillySum (arr){ //array of number
var count = 0; // created variable count which is equal to zero
for(var i=0;i<arr.length;i++){ //a for-loop which is telling myArray (passed into arr) that as long as i is less than the length of myArray (which is 5), it will continue returning the count
count += i * arr[i]; //as each loop makes a round, count then increases by whatever i has become(which would also match the index of myArray), and is multiplied by the actual index of myArray?
}
  return count //returns the sum of counts after the for-loop has run its course
  };

var myArray = [1,2,3,4,5]; //created variable 'myArray' with an array of numbers 1-4. created function before calling function above
console.log(sillySum(myArray)); //will print out my Array when function is called

var secondArray =[23,46,44,34,56]; //
console.log(sillySum(secondArray)); // honestly not sure what this is doing... maybe i should retract my comment on the last array? i'm very lost.
}
//count += (number * index)

// IsPrim(num) >> Create a function that returns true if the number passed in is a prime number and false if not.
//filter >> ** so i think i understand what works, but i'm not sure how to interpret the exercise. in this one i will type what i do and don't understand (hopefully i'm right about what i do understand)
var prime = function(num) { //creating a function called prime with parameters of num (which will become 100)?
  if (num < 2) { // if statement declaring that if num (100?) is less than 2, return false (so nothing would happen), if it is not less than two, it will continue on with the for-loop
    return false; // was not less than two, so this is bypassed
  }
  for (var i =2; i < num; i += 1) { // the for loop is saying that so long as i is less than 'num' (100?), there is an increment of 1
    if (num % i === 0) { // the if statment is saying if num (100) is evenly divisible by i, which it is, return true.
      return false; // statement is true, so this is bypassed
    }
  }
  return true; // returns true
};

var primes = function(max) { // is this the first step? the function 'primes' is created with a parameter of 'max'
  for (var i = 2; i <= max; i += 1) { //for loop is telling us so long as 'i' is less than 'max' (100?), there will be 1 increment
    if (isPrime(i) === true) { //if statement is declaring a function, 'isPrime' and saying if isPrime(2) === true .. not really sure what that means, but if it's true it will print i (which is 2).
      console.log(i); // print '2'
    }
  }
};

primes(100); // 100 is plugging into whatever reads 'num'


// filter *** third attempt to comment..



var filter = function(arr, callback) { //passing 'callback' back through the filter function
 var secondArray = []; // declaring secondArray as a function
  for (var j=0; j<array.length; j+= 1) { //for loop is saying as long as 'j' is less than array.length, the loop will have one increment
    if(callBack(array[i])) { // hmm.. is this taking the index number of array and passing it back up into the filter function?
      secondArray.push(array[i]); //this is pushing an index number into the variable secondArray.. and i think I'm understanding that that index number is created in the for-loop above, but where is the variable 'array' declared?
    }
  }
return array;
}


// example code to test your function with:
//var isOdd = function(num) {
  //return num % 2 !== 0;
//};
//filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
//filter ([8,6,7,5,3,0,9], isPrime);
// returns [7,5,3]
```
