numberArray = [];
result = 0;
do {
    number = Number(prompt('Enter number'));
    if (number !== 0 && !isNaN(number)) {
        numberArray.push(number);
    }
} while (number !== 0 && !isNaN(number));
numberArray.forEach((item) => {
    result += item;
});
console.log(result);
