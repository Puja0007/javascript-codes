class CreateObject {
    constructor(name){
        this.name = name;
    }
    getName() {
      console.log(this.name)  
    }
}

let obj1 = new CreateObject("puja");
obj1.getName();

function Person(name) {
    this.name = name;
    this.getName = function(){
        console.log(this.name);
    }
}

let obj2 = new Person("Anirban");

obj2.getName();

const Company = {
  name: "Velotio",
  technology: "Angular",
  getJob : function(){
    console.log(this.name, this.technology);
  }
}

let obj3 = Object.create(Company);
console.log(obj3);
obj3.getJob();