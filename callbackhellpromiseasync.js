// callback hell
addition(2,function(addRes,err){
    if(!err){
         Subtract(addRes,function(subRes,err){
          if(!err){
            multiplication(subRes,function(mulRes,err){
                console.log(mulRes);
                
               }); 
            }
         });
    }
});
 
function addition(val,callback){
  callback(val+5,false);
}
function Subtract(val,callback){
    callback(val-3,false);
  }
  function multiplication(val,callback){
    callback(val*5,false);
  }

  
var promise = new Promise(function(resolve,reject){
    resolve(2);
  });
 
  promise.then(addition).then(Subtract).then(multiplication).then((msg)=>{
    console.log('output: '+msg );
  }).catch((err)=>{
console.log(err);
  });
 
  function addition(val){
    return (val+5);
  }
 
  function Subtract(val){
    return (val-3);
  }
  function multiplication(val){
    return (val*5);
  }
 
  async function add(num){
   let res1 = await addition(num);
   let res2 = await Subtract(res1);
   return await multiplication(res2);
  }
add(2);