
let posts =[ {
    name: "Puja", age: '30'
    },
    {
    name: "Riya", age: '40'
    },
    ]
    
    let output="";
    
    function getPosts(){
    setTimeout(()=>{
    posts.forEach((post,index)=>{
    output +=`<li>${post.name}</li>`;
    })
   document.body.innerHTML = output;
    },1000)
    }

   

   function createPosts(post,callback) {
       setTimeout(()=>{
        posts.push(post);
        callback();
       },3000)
  
    }
   // getPosts();
  //  createPosts({name:"ani",age:'20'},getPosts);

    //same program using promise instead of callback
    
    
    function cratePostsByPromise(post){
        let num = Math.ceil(Math.random()*5);
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
          posts.push(post);
         
          if(num!=1){
            resolve();
        }
        else{
            reject("hi");
        }
       
          },2000)
          console.log(num);
         
      })
    }
  //  cratePostsByPromise({name:"ani",age:'20'}).then(getPosts).catch((err)=>{console.log(err);})
    
    /// Promise.all

    const promise1 = new Promise((res,rej)=>{
        let checkCondition=true;
        if(checkCondition){
            res("It is true");
        }
        else{
            rej("It is false");
        }
    })

    const promise2 =  new Promise((res,rej)=>{
        let checkCondition=true;
        if(checkCondition){
            res("It My Life");
        }
        else{
            rej("It is not my life");
        }
    })

    const promise3 = fetch('https://jsonplaceholder.typicode.com/todos/').then((res)=>res.json())

    Promise.all([promise1, promise2,promise3]).then((res)=>{
        console.log(res);
    }).catch((err)=>{console.log(err);})



    // instead of promise use asysnc await

    async function createAsyncPosts(post){
        await posts.push(post);
        getPosts();
    }

    createAsyncPosts({name:"adi",age:'20'});