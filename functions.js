// YOUR CODE HERE
function maxOrMin (x, y, bool){
    var a = 0;
    var b = 0;
    if (x > y){
        a = x;
        b = y;
    }
    else if (x < y){
        a = y;
        b = x;
    }
    if (bool===true){
        console.log(a+" is max");
    }else
        {console.log(b+" is min");
    }
}

function isPrime (num) {
  if (num < 2) {
    return false;
  }
  for (var i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var numSquare = function(max) {
  var squaresArr = [];

  for (i = 1; i * i <= max; i += 1) {
    squaresArr.push(i * i);
  }
  console.log (squaresArr);
};
