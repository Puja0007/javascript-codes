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
    console.log(el[0]+":"+el[1]);
})

// end

// start

// Object.assign() is used for shallow copy of one object to another
let newObj = Object.assign(person);
//console.log(newObj);
let newObj2 = {...person};
console.log(newObj2);

// deep copy
let Obj1 =  JSON.parse(JSON.stringify(newObj));
//console.log(Obj1);

//

