let count = 0;

function getData(){
    console.log("here is your data", count++);
}
const doSomeMagic = (fun,t)=>{
    let timer
  return function(){
    let context = this,
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fun.apply(context, args);
      },t)
  }
   
}
// if the differnece between two keyPress is 300ms then only getData method will be called
const debouncing = doSomeMagic(getData,300);




const getResult = ()=>{
    console.log("I got the result",count++);
}


const doSomeBetter = (fun,t)=>{
    let flag = true;
    return function(){
   let context = this,
   args = arguments;
   if(flag){
       fun.apply(context, args);
       flag=false;
       setTimeout(()=>{
        flag=true;
        },t)
   }
  
    }
}

let throtteling = doSomeBetter(getResult,3000);

const button = document.getElementById('btn');
document.addEventListener('click', throtteling);


function getSummation(a,b,c){
    return a*b*c;
}

let curyFun = getSummation.bind(this,3);
