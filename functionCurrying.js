function multiply(x,y,z){
    console.log(x*y*z);
}
 // functioncurrying means make a function then create multiple duplicate function from that single function

 // currying using bind
let multiplyBytwo = multiply.bind(this,3);

multiplyBytwo(4,6);
let multiplyByThree = multiply.bind(this,3)
multiplyByThree(4,4);

// currying using closure

let sumOfNumbers = function (x){
    return function(y){

      return function(z){
          console.log(x+y+z);
      }
    }
}

let curryingByClosure = sumOfNumbers(2);
curryingByClosure(3)(4);




