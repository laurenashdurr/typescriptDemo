class Person {
    firstName: string;
    lastName: string;

    sayHello(){
        console.log("Hello", this.firstName);
    }

    sayHelloToFullname(){
        console.log("Hello", this.firstName + " " + this.lastName)
    }
}

let person: Person = new Person();

person.firstName = "Sheriff";
person.lastName = "Holler"

person.sayHelloToFullname();

let kenn: Person = new Person();

kenn.firstName = "Kenn";

kenn.sayHello();

let phil: Person = new Person();

phil.firstName = "Phil";
phil.lastName = "Donahue";

class Game {
    constructor(name: string, maker: string){
        this.gameName = name; 
        this.gameMaker = maker;
    }
    gameName: string; 
    gameMaker: string;
}

let battleship: Game = new Game('Battleship', 'Hasbro');

class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}
// Example One 

class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false; 
myCar.topSpeed = 200;
myCar.make = "Volvo";

// Example Two

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 100;

class Animal {
    hasFur: boolean;
    age: number;
    color: string;
}

class Bear extends Animal {
    livesInSmokies: boolean;
}

class Tiger extends Animal {
    maleOrFemale: string;
}

let tony: Tiger = new Tiger();
tony.maleOrFemale = "male";
tony.hasFur = true;

let Smoky: Bear = new Bear();
Smoky.age = 25;
Smoky.livesInSmokies = false;

// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

// Refactored Code

class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store ("Ikea", "Fishers")


class Employee extends Person{
    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee: Employee = new Employee();
newEmployee.setSalary(30000);
// newEmployee._salary = 0; --> this breaks
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);