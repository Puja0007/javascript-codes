var currentDate = new Date();

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);

// 31 Dec 1969
let Dec31_1969 = new Date(-24 * 3600 * 1000);

//How to get current formatted date dd/mm/yyyy in Javascript and append it to an input [duplicate]

const today = new Date();
let date = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();

if(date<10){
    date = "0"+date;
}

if(month<10){
    month = "0"+month;
}

console.log(date+"/"+month+"/"+year);


