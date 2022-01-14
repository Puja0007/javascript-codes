const users = [
	{ firstName: "Alok", lastName: "Raj", age: 23 },
	{ firstName: "Ashish", lastName: "Kumar", age: 29 },
	{ firstName: "Ankit", lastName: "Roy", age: 29 },
	{ firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

let ageByUser=users.filter((elem)=>elem.age !=29).map((e)=>e.firstName);

console.log(ageByUser);


let arr=[3,5,6,2,10];
arr.splice(1,2,3);
console.log(arr); // [3,3,2,10]
let arr1=arr.slice(1,4);
console.log(arr1); //[ 5, 6, 2 ]

let arr4= [1,3,2,3,9,6]
// console.log(arr.find((e)=>e!==2));
let arr2  = arr4.sort((a,b)=>a-b); 
console.log(arr2);


