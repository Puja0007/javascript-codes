//Q 1

let x = {
    a:1,
    b:2
}
let arrValue=[];
let arrEntries=[]
let arrEntriesValues=[]
let arrEntriesKeys=[]
for(let y in x){
    arrValue.push(x[y]);  
}
arrEntriesValues= Object.values(x);
arrEntriesKeys= Object.keys(x);
arrEntries= Object.entries(x);
//console.log(arrValue,arrEntriesValues,arrEntriesKeys,arrEntries);

// Q2 reverse the string

let x1 = "hi"
var j=0;

const reverseStrings = ((str)=>{
 return str.split("").reverse().join("")
})
let y=reverseStrings(x1);
//console.log(y);


// Q3

const obj = {
    a:1,
    b:2,
    getA(){
        //console.log(this.a);
        return this;
    },
    getB(){
    //console.log(this.b);
    }
}

obj.getA().getB();
// level 7
// Q4
arr=[1,2];
 
Array.prototype.print = function(){
  
 //console.log(this.join(","));
}
arr.print();


// Q 5

const A = function(x){
    this.x= x;
 this.getX = function(){
     return this.x
 }
};

const B = function(x,y){
    this.y = y;
    this.getY = function(){
       
        return this.y
    }
    A.call(this,x);
};

const newb = new B(3,4);
newb.getX();
newb.getY();

class X {
    constructor(x){
        this.x=x;
    }
    getX(){
    return this.x;
    }
}

class Y extends X {
    constructor(x,y){
        super(x);
    this.y = y;
}
    getY(){
    return this.y;
    }
}

const obj1 = new Y(2,3);

//console.log(obj1.getX());

obj2 = {
    "usename": "puja",
    "age": 30
}
function fun1(obj,fun){
    setTimeout(()=>{
        fun(obj);
    },300);
}

function fun(obj){
    //console.log("I am done");
}

fun1(obj2,fun);

function fun3(fun){
   fun();
}

function fun4(){
    //console.log("hi");
}
fun3(fun4);

const newobj = {
    a:{
        b:{
            c:3
        }
    }
}

/// deep copy of object

let copyObj = JSON.parse(JSON.stringify(newobj));

/// shallow copy of object

let copyObj2 = Object.assign({},newobj);
let copyObj3 = {
    ...newobj
}


const newobj2 = {
    x:1,
    getX: function() { 
        const inner = function(){
            //console.log(this.x);
        }
        inner();
    }
}
newobj2.getX(); // undefined
// one way
const newobj3 = {
    x:1,
    getX: function() { 
        const inner = ()=>{
            //console.log(this.x);
        }
        inner();
    }
}
newobj3.getX(); // 1 

// second way 
const newobj4 = {
    x:1,
    getX: function() { 
        let that = this;
        const inner = ()=>{
            //console.log(that.x);
        }
        inner();
    }
}
newobj4.getX(); // 1

const newobj5 = {
    x:1,
    getX: function() {  
        const inner = ()=>{
            //console.log(this.x);
        }
        inner.apply(this)
    }
}
newobj5.getX(); // 1


// write fun for both add(1,2,3) , add(1)(2)(3)

function add(num1,num2,num3) {
        if(num1 && num2 && num3){
            return num1 + num2 + num3
        }
        else{
            return function(num4){
                return function(num5){
                    return num1+num4+num5;
                }
            }
        }
}

// //console.log(add(1,2,3));
// //console.log(add(1)(2)(3));

const newArr= [8,3,2,1,7,6,4,0];


let missingNum;
function findMissingNum(arr) {
    const arr2 = arr.sort((a,b)=>a-b);
    for(let i=0; i<arr2.length-1; i++) {
        if(i!=arr2.length-1){
            if(arr2[i+1]-arr2[i]>1){
                missingNum= arr2[i+1]-1;
                
            }
        }
       
    }
    return missingNum;
}
////console.log(findMissingNum(newArr));


// another approach

let len = newArr.length;

let total = len*(len+1)/2;
let sumOfArr = newArr.reduce((sum,acc)=>sum+acc)

let missingNumber = total-sumOfArr;
////console.log(missingNumber);

// I love js = sj evol i
let str = "I love Js";
let strArr = str.split("").reverse().join(" ");

//console.log(strArr);


let number = 23456565;

function countLengthOfNum(num){
    let count=0;
 
    while(num>1){
        num = num/10;
        count++;
    }
    return count;
}

//console.log(countLengthOfNum(number));

function addition(a,b){
    if(a&&b){
        return a+b;
    }
    else{
        return function(b){
            return a+b;
        }
    }
}

console.log(addition(5,6));
console.log(addition(5)(6));