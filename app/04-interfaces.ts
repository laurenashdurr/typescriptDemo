interface AnimalTest { 
    name: string;
    numberOfLegs: number;
}

// let a: Animal = new Animal(); --> this should throw an error

let lassie: AnimalTest = {
    name: 'Lassie',
    numberOfLegs: 4
}

// sayHi(name: string) : string {
//     var someNum = 1 + 2;
//     var someOtherNum = 1 + 2;
//     return name1;
// }  not sure why this isn't working

interface Product {
    name: string;
    price: number;
    setTimeOfPurchase(d: Date);
}

class Apples implements Product {
    name: 'Apples';
    price: 5.50;

    setTimeOfPurchase(d: Date) {
        console.log("Apples purchased on ", d);
    }
}

let myApples: Apples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));


//  the github error 
// getting the code to show correctly in the terminal
// the questions I have on this page and a general understanding of all the concepts covered -- review, youtube
