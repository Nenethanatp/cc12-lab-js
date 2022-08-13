const arr = [-3, 2, 0, -7, 4, 6];
const square = arr.map((item) => item ** 2);
square.sort((a, b) => (a < b ? -1 : 1));
console.log(square);
