// let a: Animal = new Animal(); --> this should throw an error
var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log("Apples purchased on ", d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
//  the github error 
// getting the code to show correctly in the terminal
// the questions I have on this page and a general understanding of all the concepts covered -- review, youtube
//# sourceMappingURL=04-interfaces.js.map