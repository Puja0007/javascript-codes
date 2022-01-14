// // let radiusArr = [2,4,7,9];
// // let calculatedRadius=[];
// // function calculateRadius(arr){
// //   for(var i=0; i<arr.length; i++){
// //       calculatedRadius.push(Math.PI*arr[i]*arr[i]);
// //   }
// //   return calculatedRadius;
// // }

// // let result = calculateRadius(radiusArr);
// // console.log(result);

// // function area(radius){
// //   return Math.PI*radius*radius;
// // }

// // function peremeter(radius){
// //     return 2*Math.PI*radius
// // }

// // function operationOfRadius(arr,logic){
// //     let calculatedRadius1=[];
// //     for(let i=arr[0];i<arr.length;i++){
// //         calculatedRadius1.push(logic(arr[i]))
// //     }

// //     return calculatedRadius1;
// //  }
// //  console.log(operationOfRadius(radiusArr,area));

// // let printOnlyName = function(){
// //   console.log(this.fname);
// // }
// //  let name={
// //    fname:"Puja",
// //    lname:"Das",
// //    printFullName: function(){
// //   console.log(this.fname+" "+this.lname);
// //    }
// //  }
// //  printOnlyName.call(name);//name
// //  name.printFullName(); // Puja Das 

// //  let name2={
// //    fname:"Ani",
// //    lname:"Pal",
// //  }
// // //function borrowing using call method 
// //  name.printFullName.call(name2); //Ani Pal

// //  // suppose you have more paramters in the function 

// //  let printNameLocation = function(location,state){
// // console.log(this.fname+" from "+location+"&"+state);
// //  }
// // // difference between call and apply
// // console.log(name);
// // printNameLocation.call(name,"kolkata","wb"); // Puja from kolkata & wb
// // printNameLocation.apply(name,["kolkata","wb"]); // Puja from kolkata & wb
// // Function.prototype.myBind= function(...args){
// //   let obj = this;
// //   params = args.slice(1);
// //   console.log(params);
// //  return function(){
// //     obj.apply(args[0],params)
// //  }
// // } 

// // let printNameLocationNew = printNameLocation.myBind(name,"kolkata","wb");
// // console.log(printNameLocationNew);
// // printNameLocationNew();
// // // ƒ (location,state){
// // //   console.log(this.fname+" from "+location+"&"+state);
// // //    }


// // let array=[1,2,3,4,5];
// // const printWithDelay= (arr)=>{
// //   let index =0;
// //   let timer=null;
// //   const print = ()=>{
// //     if(index>=arr.length){
// //       clearTimeout(timer);
// //     }
// //     else{
// //       timer=setTimeout(()=>{
// //         console.log(arr[index++]);
// //         print();
// //       },1000)

// //     }

// //   }
// //   print();
// // }
// // printWithDelay(array);


// const arr = [2,2,3,4,5,5,6];
// const dic = {}
// var index=[];
// for(let x of arr) {
// if(dic[x] === undefined){
//   dic[x] =1
// }
// else{
//   dic[x] +=1
//   if(dic[x]===2){
//     index.push(arr.indexOf(x));
//   }
// }
// }

// // index.sort((a,b)=>{
// //   return a-b;
// // })
// // console.log(dic);

// // console.log(arr[index[0]]);

 

// function firstDuplicate(a) {
//   const dic= {};
//   var secondOccerenceIndex=[];
//   for (let i=0; i<a.length; i++){
//       if(dic[a[i]]=== undefined){
//           dic[a[i]]=1;
//       }
//       else{
//           dic[a[i]]+=1;
//           if(dic[a[i]]===2){
//               secondOccerenceIndex.push(i);
//           }
//       }
//   }
//   secondOccerenceIndex.sort((a,b)=>{
//       return a-b;
//   })
  
//   if(secondOccerenceIndex.length===0)
//   {
//       return -1;
//   }
//   else{
//       return a[secondOccerenceIndex[0]];
//   }
// }
 
// // var max=arr[0];
// //  for(let i=1; i<arr.length; i++){
// //    if(max<arr[i]){
// //      max=arr[i];
// //    }
// //  }
// //  console.log(max);

//  function firstNotRepeatingCharacter(s) {
//   let dic ={};
//   for(let i of s){
//       if(dic[i]=== undefined){
//           dic[i]=1;
//       }
//       else{
//           dic[i]+=1;
//       }
//   }
//   var duplicateChars=[];
//   for(let x in dic){
//       if(dic[x]===1){
//           duplicateChars.push(dic[x]);
//       }
//   }
//   if(duplicateChars.length===0){
//       return '_'
//   }
//   else{
//       return dic[0];
//   }
//   }
//   console.log(dic[0]);
//   firstNotRepeatingCharacter("pupuuja");






// s = "abacabad";

//   let dic ={};
// for(let i of s){
//     if(dic[i]=== undefined){
//         dic[i]=1;
//     }
//     else{
//         dic[i]+=1;
//     }
// }
// console.log(dic);
// var keyz =[]; 
// keyz=Object.keys(dic);
// console.log(keyz);
// var duplicateChars=[];
// for(let x in dic){
//     if(dic[x]===1){
//         duplicateChars.push(x);
//     }
// }
// console.log(duplicateChars);
// if(duplicateChars.length===0){
//     return '_'
// }
// else{
//     return duplicateChars[0];
// }


function sum(a,b){
    if(a && b){
        return a+b;
    }
    else{
        return function(b){
            return a+b;
        }
    }
}

// console.log(sum(2,5));
// console.log(sum(4)(5));

//Shift all Negative numbers of the array at starting and positive numbers after that in the array.
let x =[15,-4, 10, 12, -12, 10, -11, 23, 8372]; 

for(let i=0;i<x.length;i++){
    if(x[i] < 0){
        let num = x[i];
        x.splice(i,1);
        x.unshift(num)
       
    }
}
//console.log(x);

var a;
var b;
console.log(b=(a=4));

var e=10;
let e=100;
console.log(e);

