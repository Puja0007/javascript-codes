function solve(obj,fun){
    setTimeout(()=>{
        fun(obj)
    },3000)
}

obj = {
    username:"Puja Das",
    age: 25
}

function pass(obj){
    console.log("I am done waiting,thank you");
}

solve(obj,pass);