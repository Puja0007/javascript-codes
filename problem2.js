function i_am_promise(i_am_boolean) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(i_am_boolean){
                resolve('success')
            }
            else{
                reject('failiure')
            }
        },3000)
    })

}

i_am_promise(false).then(res=>console.log(res)).catch(err=>console.log(err));