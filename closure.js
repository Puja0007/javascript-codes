function a(){
    var x=10;
    function b(){
        console.log(x);
    }
 return b;
}
a()();

// callback



function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

// immediately invoked function
let increment = (function(i){
    console.log(i+1);
})(6);

(function (){
    console.log("hello");
})();
