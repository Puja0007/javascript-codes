let obj1={
    name: "Puja",
    age: "26"
}

function fun1(home,office){
console.log(this.name,this.age,home,office);
}
Function.prototype.myBind = function(...args){
    let fun=this;
    let params= args.slice(1);
    return function(...args2){
        fun.apply(args[0],[...params,...args2]);
    }
}
fun1.call(obj1,"kankinara","kolkata");
fun1.apply(obj1,["kankinara","kolkata"])
let borrowMethod = fun1.myBind(obj1,"kankinara");
borrowMethod("kolkata");

// bind polyfill


