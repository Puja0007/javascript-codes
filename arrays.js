let scores = new Array();
//console.log(scores); // []
let scores1 = new Array(10);
//console.log(scores1); // [empty × 10]
let scores2 = new Array(9,10,8,7,6);
//console.log(scores2); // [9,10,8,7,6]

let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
const firstElement = seas.shift();

//console.log(firstElement); // Black Sea

console.log(Array.isArray(seas)); // true

//n a sparse array, the length property doesn’t indicate the actual number of elements. It’s a number that is greater than the highest index. For example:

let numbers = [10, , 20, 30];
console.log(numbers.length); // 4

// In this example, the number of elements in the numbers array is three: 10, 20, and 30. The highest index is three. Therefore, the length property returns four.

// The following adds an element to the numbers array at the index 10:

numbers[10] = 100;
console.log(numbers.length); // 11


// 1) Empty an array
// If you set length to zero, the array will be empty:

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 0;

console.log(fruits); // []

// 2) Remove elements
// If you set the length property of an array to a value that is lower than the highest index, all the elements whose index is greater than or equal to the new length are removed.

// The following example changes the length property of the fruits array to two, which removes the third element from the array:

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 2;

console.log(fruits); // [ 'Apple', 'Orange' ]

// 3) Make array sparse
// If you set the length property of an array to a value that is higher than the highest index, the array will be spare. For example:

const fruits = ['Apple', 'Orange', 'Strawberry'];
fruits.length = 5;

console.log(fruits); // [ 'Apple', 'Orange', 'Strawberry', <2 empty items> ]


//Reverse a string using a JavaScript stack

function reverseString(str) {
    let stack = new Stack();
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    let reversed = '';
    while (!stack.isEmpty()) {
        reversed += stack.pop();
    }
    return reversed;
}