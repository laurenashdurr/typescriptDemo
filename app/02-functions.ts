function addNumbers(numOne: number, numTwo: number){
    return numOne + numTwo;
}

// 1 - Works
addNumbers(1,2);

// 2 - Errors 
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");

// Example 
function stringConcat(firstName: string, lastName: string){
    return firstName + " " + lastName;
}

stringConcat("lauren", "durr")

function sayHello(name: string) : string {
    return name;
}

sayHello("Kenn");
// sayHello(1); Will cause an Error

// Practice Function 
// function pracFunc(username: string, password: string) : boolean {
//     if (username = "elevenfiftyuser" && password = "Letmein1234");
//     return true
// }

function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string){
    console.log(someString);
    return numOne + numTwo; 
}

addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "this is optional");

// Practice 

function tryingOutOptionals(first: string, last: string, middle?: string ){
    return first + middle + last
}