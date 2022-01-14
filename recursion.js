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
let simpleObj={};
let magicFun = (obj,parent)=>{
  for(let key in obj){
      if(typeof obj[key] === 'object'){
          magicFun(obj[key],parent+"-"+key);
      }
      else{
        simpleObj[parent+"-"+key] = obj[key];
      }
  }
  return simpleObj;
}

console.log(magicFun(userDetails,"userDetails"));

let sumOfNum = (a)=>{
    return (b)=>{
        if(b){
            return sumOfNum(a+b);
        }
        else{
            return a;
        }
    }
}

console.log(sumOfNum(1)(3)(4)());


let sum = (a)=>(b)=> {return b? sum(a+b):a}

console.log(sum(1)(2)(3)());


