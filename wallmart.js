function outer() {
    let x = 10;
    function inner() {
        console.log(x);
    }

    inner();
}

// outer()();

let name = {
    age: "34",
    address: "Kolkata"
};

let getName = function(name) {
     
    this.name = name;
    this.getDetails = function() {
        console.log(this.name);
    }
}

let obj1 = new getName("puja");
// let obj2 = Object.create(this.name);


// let str1 = "bababauwhr";

// function getLongestPalindrome(string){
 
//     var length = string.length;
//     var str = "";
//     var palindrome = function(left, right){
//         while(left >=0 && right < length && string[left] === string[right]) 
//         { 
//             left--; right++;
//         }

//         return string.slice(left+1,right);
//     }

//     for(let i = 0; i < length-1; i++){
//         str = palindrome(i-1,i)
//     }

//     return str;
// }

function fun(){
    console.log(x);
    let x = 10;
}
fun();