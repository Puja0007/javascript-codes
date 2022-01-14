arr = ["home","about","contact me"];

const liTag = document.createElement('li');
arr.forEach((elem)=>{
    const liTag = document.createElement('li');
    liTag.textContent = elem;
    document.body.appendChild(liTag);
})

arr1 =["SO","RO","CO"];
arr1.forEach((elem)=>{
    let parent = document.createElement('div');
    document.body.appendChild(parent);
    parent.className = 'parent';
    const circle = document.createElement('div');
    parent.appendChild(circle);
    circle.style.height= "20px";
    circle.style.width= "20px";
    circle.style.borderRadius= "50%";
    circle.style.border = "2px solid black";  
    circle.innerText=elem;
    circle.style.textAlign="center";
    circle.style.fontSize= "80px";   
})

const parent = document.createElement('div');
document.body.appendChild(parent);
parent.className = 'parent';
const circle = document.createElement('div');
parent.appendChild(circle);
circle.style.height= "20px";
circle.style.width= "20px";
circle.style.borderRadius= "50%";
circle.style.border = "2px solid black";  
circle.innerText="SO";
circle.style.textAlign="center";
circle.style.fontSize= "80px";


const circle1 = document.createElement('div');
parent.appendChild(circle1);
circle1.style.height= "20px";
circle1.style.width= "20px";
circle1.style.borderRadius= "50%";
circle1.style.border = "2px solid black";
circle1.innerText="RO";
circle1.style.textAlign="center";
circle1.style.fontSize= "80px";

const circle2 = document.createElement('div');
parent.appendChild(circle2);
circle2.style.height= "20px";
circle2.style.width= "20px";
circle2.style.borderRadius= "50%";
circle2.style.border = "2px solid black";
circle2.innerText="CO";
circle2.style.textAlign="center";
circle2.style.fontSize= "80px";


