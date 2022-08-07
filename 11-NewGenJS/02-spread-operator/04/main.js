function doubleAndReturnArgs(array, ...number) {
    let multiplyTwo = number.map((item) => {
        return item * 2;
    });
    return [...array, ...multiplyTwo];
}
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
// expexted result: [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2], 10, 4));
// expexted result: [2, 20, 8]
