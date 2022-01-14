let name={
    fname : 'puja',
    lname: 'das'
}

function printFullName(location,age){
    console.log("hi i am",this.fname,this.lname,"from" ,location,"age", age);
}
//  borrowing a method for any object using call and apply
printFullName.call(name,"Kolkata",25);
printFullName.apply(name,["Kolkata",25]);
 // using bind you dont need to invoke the function immediately you can store it in a variable and use it letter using bind
let borrowMethod = printFullName.bind(name);
console.log(borrowMethod);
borrowMethod("Kolkata",25);

// polyfill for bind method

Function.prototype.myBind = function(...args) {
    let params = args.slice(1);
    let obj = this;
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}


let borrowByCustomBind = printFullName.myBind(name,["kankinara",23]);



