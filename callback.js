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

// data hiding with closure and callback function
function AttachEventListener(){
    let count = 0;
    document.getElementById("clickme").addEventListener("click", function(){
        console.log('click me',count++);
    })
}

AttachEventListener();




