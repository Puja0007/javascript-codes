function show(){
    console.log('show');
}

function hide(fun){
   setTimeout(function(){
       fun();
   },3000);
   console.log("hi");
}

hide(seek); 

function seek(){
    console.log('seek');
}




