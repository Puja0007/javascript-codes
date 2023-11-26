// map() creates a new array from calling a function for every array element.

// map() does not execute the function for empty elements.

// map() does not change the original array.

Array.prototype.myMap = function(operation) {

    let result =[];

    for (let i = 0; i < this.length; i++) {
        result.push(operation(this[i]));
    }

    return result;
}