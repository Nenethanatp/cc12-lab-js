// function Accumulator(startingValue) {
//     this.currentValue = startingValue;
//     this.read = function () {
//         input = +prompt('Enter input');
//         this.currentValue += input;
//     };
//     this.show = function () {
//         alert(this.currentValue());
//     };
// }

function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function () {
        this.input = Number(prompt('Enter input'));
        this.currentValue += this.input;
    };
    this.show = function () {
        alert(this.currentValue);
    };
}
const obj1 = new Accumulator(2);

// Class
class Accumulator {
    constructor(startingValue) {
        this.currentValue = startingValue;
    }
    read = function () {
        this.input = Number(prompt('Enter input'));
        this.currentValue += this.input;
    };
    show = function () {
        alert(this.currentValue);
    };
}

const obj = new Accumulator(2); // 2 is the parameter (run on constructor method)
//constructor is the method of class
