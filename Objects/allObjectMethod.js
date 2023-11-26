let person = {
    name: "Puja",
    age: 23,
    profession: "Developer",
   getDetails : function(){
        console.log(this.name,this.age,this.profession);
    }
}

Object.keys(person).forEach((el)=>{
    //console.log(el+" : "+person[el]);
})

let values = Object.values(person);
//console.log(values);

// start
// Object.entries() creates a nested array of the key/value pairs of an object.
let entries = Object.entries(person);
console.log(entries);

        //o/p
// [
//     [
//         "name",
//         "Puja"
//     ],
//     [
//         "age",
//         23
//     ],
//     [
//         "profession",
//         "Developer"
//     ],
//     [
//         "getDetails",
//         null
//     ]
// ]

entries.forEach((el)=>{
   // console.log(el[0]+":"+el[1]);
})

// end

// start

// Object.assign() is used for shallow copy of one object to another
let newObj = Object.assign(person);
//console.log(newObj);
let newObj2 = {...person};
//console.log(newObj2);

// deep copy
let Obj1 =  JSON.parse(JSON.stringify(newObj));
//console.log(Obj1);

//Object.freeze()
// Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

const user = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

//console.log(newUser);
// Output
// {username: "AzureDiamond", password: "hunter2"}


//Object.seal()
//Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties.

const user1 = {
	username: 'AzureDiamond',
	password: 'hunter2'
};

// Seal the object
const newUser1 = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

//console.log(newUser);
//Output
//{username: "AzureDiamond", password: "*******"}


// Object.getPrototypeOf()
// Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.

const employees = ['Ron', 'April', 'Andy', 'Leslie'];

Object.getPrototypeOf(employees);
// Output
// [constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]


// check if Object is empty
let obj={
    name:"Puja",
    life: "Hell",
    passion: "Career"
}
if(obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype){
   // console.log("Empty object");
}


// for in loop
let obj2={
    name:"Puja",
    life: "Hell",
    passion: "Career"
}

for(let key in obj2){
   // console.log(key +""+obj2[key]);
}

let arr = ["Puja","Adi","Anirban"];
for(let item in arr){
    console.log(item+""+arr[item]);
}

for(let item of arr){
    console.log(item);
}


// Object Destructuring

let person2 = {
    firstName: 'John',
    lastName: 'Doe',
    currentAge: 28
};

let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

console.log(middleName); // ''
console.log(age); // 28
