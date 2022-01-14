arr = [1,2,3,4,5];
const newArr=arr.map((e)=>
    (e*e)+1
);
//console.log(newArr);

const arr1= arr.filter((e)=>{
    return e>3
}
)
//console.log(arr1);


const output = arr.reduce(function (acc,curr){
    acc = acc + curr;
    return acc
},0);
//console.log(output);


function getDetails(name){
    console.log("Hi I am"+" "+name);
}
function getName(callback,name) {
    setTimeout(()=> {
    callback(name);
    },1000)
}

getName(getDetails,"puja");


let counter =(function(){
    var count =0;
    return function() {
        return count++;
    }
})();

console.log(counter()); 
console.log(counter());
console.log(counter());
console.log(counter());



