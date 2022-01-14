promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'one');
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then(function(value) {
  console.log(value); // "two" // Both promises will resolve, but promise2 is faster
});

Promise.all([promise1, promise2]).then((res)=>console.log(res)).catch((err)=>{
    console.log(err);
})

promise1.then((res)=>console.log(res)).catch((err)=>{
    console.log(err);
})