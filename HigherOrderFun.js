function calculateArea(radius){
    return Math.PI * radius * radius;

}

function calculateCircumference(radius){
    return 2 * Math.PI * radius;
}

function calculate(radiusArr, operation){

    let output = [];
    for(let i = 0; i < radiusArr.length; i++){
        output.push(operation(radiusArr[i]));
    }
    return output
}

