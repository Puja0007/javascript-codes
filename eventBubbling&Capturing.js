document.querySelector('#grandParent').addEventListener('click',()=>{
    console.log('grandParent');
},true);

document.querySelector('#parent').addEventListener('click',()=>{
    console.log('parent');
},true);

document.querySelector('#child').addEventListener('click',()=>{
    console.log('child');
},true);

document.querySelector('#catagory').addEventListener('click',(e)=>{
    console.log(e.target.id);
})