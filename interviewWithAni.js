
// const promise1 = new Promise(function(resolve, reject) {
//     let num = Math.ceil(Math.random() *5);
//     if(num!=1){
//         resolve("Hi I am SUCCESS")
//     }
//     else{
//         reject("Error")
//     }
// })


// const promise2 = fetch('https://jsonplaceholder.typicode.com/todos/1').then((res)=>res.json());

// Promise.all([promise1,promise2]).then((res)=>console.log(res)).catch((err)=>console.log(err));


// let posts =[
//     { name:"Puja", age:"32"},
//     { name:"Anirban", age:"20"},
// ]
// output = "";
// function getPosts() {
//     setTimeout(() =>{
//         posts.forEach((elem)=>{
//             const liTag= document.createElement("li");
//             liTag.innerText = `${elem.name}`
//            document.body.appendChild(liTag);
//         })
//     },1000)
  
// }

// async function createPosts(post) {
//     posts.push(post);
//    await getPosts();
// }
  
// createPosts({name:"ani",age:'20'});
// //createPosts({name:"ani",age:'20'}).then(getPosts).catch((err)=>{console.log(err)})


async function showUsers(url){
let response = await fetch(url)
let res1 = await response.json();
console.log(res1);

}
showUsers('https://jsonplaceholder.typicode.com/todos/1')


// let getBetterFunction= (fun,t)=>{
   
//     let check = true;
//      return function(){
       
//         if(check){
//             setTimeout(function(){
//                     check=true;
//                 },t)
//                 let context = this;
//                 let args = arguments;
//             fun.apply(context,args);
//             check=false;
//             }
         
//      }
 
 
//  }

// let throtteling = getBetterFunction(showPosts,3000)
// const btnclk = document.getElementById('btn');
// btnclk.addEventListener('click',throtteling);

// let count = 0;
// function showPosts(){
// console.log("Hi I am here", count++);
// }


// let showSomeMagic = (fun,t)=>{
//  let timer
//     return function(){
//         clearTimeout(timer);
//         let context = this;
//         let args = arguments;
//        timer = setTimeout(()=>{
//         fun.apply(context,args);
//         },t)
//     }
// }
// let debouncing = showSomeMagic(showPosts,3000)



function sum(a){
    if(a){
        return function(b){
            if(b){
                return sum(a+b);
            }
            else{
                return a
            }
           
        }
    }
    else{
        return 0;
    }
}

console.log(sum(1)(2)());
//sum(),sum(1)()


let userDetails = {
    name: "Puja",
    address:{
        personal:{
            state:"WestBengal",
            area:{
               landmark: "Icon store"
           }
        },
        office:{
            state:"Bangalore",
            area:{
                landmark: "Hitech city"
            }
        }
    },

}

let simpObj={};
function getSimpleRes(obj,parent){
    for(let key in obj){
        if(typeof obj[key] === "object"){
            getSimpleRes(obj[key],parent+"-"+key);
        }
        else{
            simpObj[parent+"-"+key]=obj[key];
        }
    }

    return simpObj;
}
console.log(getSimpleRes(userDetails,"userDetails"));


function multiple(a){
  return function(b){
      return function(c){
        console.trace();
          return a*b*c;
      }
  }
  
}


console.log(multiple(1)(2)(3));

arr2 = [4,5,6,9,10]
function printArr(arr){
  
    for(let i=0; i<arr.length; i++){
        setTimeout(()=>{
            console.log(arr[i]);
        },1000)
    }
}

printArr(arr2);

function printArrWithFun(arr){
    for(var i=0; i<arr.length; i++){
        function close(i){
            setTimeout(()=>{
                console.log(arr[i]);
            },1000)
        }
        close(i);
    }
}

printArrWithFun(arr2);

let user = {
    name:"Puja", age: "45"
}
function getDetails(location,age){
    console.log(this.name,location,age);
}

Object.prototype.myBind = function(...args){
    let params = args.slice(1);
    let obj = this
    return function(){
        obj.apply(args[0], params);
    }
}

let bindFun = getDetails.myBind(user,["kolkata",34]);

bindFun();


function getName(){
    console.log("hi I am debouncing");
}

let getBetterFunction = (fun,t)=>{
    let timer;
     return function(){
        clearTimeout(timer);
         let context = this,
             args = arguments;
      timer = setTimeout(()=>{
           fun.apply(context,args);
        },t)
     }
   
}

let debouncing = getBetterFunction(getName,3000);



let getMagicFun = (fun,t)=>{
  
    return function(){
      let check = true;
        let context = this,
            args = arguments;
            if(check){
                fun.apply(context,args);
                check = false;
            }
          
           setTimeout(()=>{
            check= true;
       },t)
    }
}
