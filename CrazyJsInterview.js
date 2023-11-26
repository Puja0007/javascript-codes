// data hiding with closure
// we are hiding this count valriable usign closure 

function counter(){
    var count=0;
    return function incrementCounter(){
        count++;
        console.log(count);
    }
}

let counterCalculator = counter();
counterCalculator();
counterCalculator();
//console.log(count++);// using this we can't access the count

// to make the counter function more scalable we need to implement constructor function

function Counter2(){
    var count=0;

    this.incrementCounter=()=>{
        count++;
        console.log(count);
    }

    this.decrementCounter=()=>{
        count--;
        console.log(count);
    }
}

let printCounter = new Cunter2();
printCounter.incrementCounter();
printCounter.decrementCounter();