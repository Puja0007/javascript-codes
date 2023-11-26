// Aggregation
// Sum all the elements of the array or multiply all the elements of the
// array.


let arr = [1,2,3,4];

let sum = arr.reduce((prev,cur)=>{
    let sum = prev+cur;
    return sum
},0);
console.log(sum);


// product of all the elements of the array

let product = arr.reduce((prev,cur)=>{
    let prod = prev * cur;
    return prod
},1)

console.log(product);


// Segregation
// We can group a certain set of values depending on our requirements.

let arr2 = [1.1, 1.2, 1.3, 2.2, 2.3, 2.4];

let groupedObj = arr2.reduce((prev,cur)=>{
    let flooredValue = Math.floor(cur);
    if(!prev[flooredValue]){
        prev[flooredValue] =[];
    }
    prev[flooredValue].push(cur);
    return prev;
},{})

console.log(groupedObj)