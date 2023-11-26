Array.prototype.customReduce = function(cb){
    let ele = this[0];
    if(typeof ele==='object'){
      let sum ={};
    for(let o of this){
      for(let k in o){
        if(!(k in sum)){
          sum[k]=0;
        }
        sum[k] = cb(sum[k],o[k]);
      }
    }
    return sum;
    }
     else{
       let sum =0;
       for(let i=0;i<this.length;i++){
         sum= cb(sum,this[i])
       }
       return sum;
     }
    
  }
  const arrObj = [{
    "age":32,
    "num":4
  }, {
    "age":30,
    "num":3
  }]
  let arr=[4,4,4]
  let sumResult = arr.customReduce((acc,res)=>acc+res);
 // console.log(sumResult);

//   function printTimer(){
//     for(let j=1;j<10001;j++){
//     setTimeout(()=>{
//       console.log(j);
//     },j);
//   }
// }
let count=0;
function printTimer(){
  console.log(count++);
  if(count<1001){
    setTimeout(()=>{
      printTimer();
    },1)
  }
}

  printTimer();