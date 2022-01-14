let obj1 = {
    name: "Puja", age: '20',
    getIntro: function() {
        console.log(this.name);
    }
}

let obj2 = {
    name: "Ani", 
}
// prototypal inheritence
obj2.__proto__ =obj1
obj2.getIntro();