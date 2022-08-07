function Calculator() {
    // const this = {}
    this.num1 = 0;
    this.num2 = 0;
    this.read = function () {
        this.num1 = Number(prompt('Enter first number'));
        this.num2 = Number(prompt('Enter second number'));
    };
    this.sum = function () {
        return this.num1 + this.num2;
    };
    this.mul = function () {
        return this.num1 * this.num2;
    };
    // return this
}

const obj = new Calculator();
const obj2 = new Calculator();
