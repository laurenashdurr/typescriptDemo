function addNumbers(numOne, numTwo) {
    return numOne + numTwo;
}
// 1 - Works
addNumbers(1, 2);
// 2 - Errors 
// addNumbers(1, 2, 3);
// addNumbers(1, 2, 3, "Foo");
// Example 
function stringConcat(firstName, lastName) {
    return firstName + " " + lastName;
}
stringConcat("lauren", "durr");
function sayHello(name) {
    return name;
}
sayHello("Kenn");
// sayHello(1); Will cause an Error
// Practice Function 
// function pracFunc(username: string, password: string) : boolean {
//     if (username = "elevenfiftyuser" && password = "Letmein1234");
//     return true
// }
function addNumbersWithOptional(numOne, numTwo, someString) {
    console.log(someString);
    return numOne + numTwo;
}
addNumbersWithOptional(1, 2);
addNumbersWithOptional(1, 2, "this is optional");
// Practice 
function tryingOutOptionals(first, last, middle) {
    return first + middle + last;
}
//# sourceMappingURL=02-functions.js.map