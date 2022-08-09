//true
//false
//false
//true
//true NaN use include to find not indexOf
//false

console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3].includes(4)); // false
console.log([1, 2, 3].includes(3, 3)); // false
console.log([1, 2, 3].includes(3, -1)); // true
console.log([1, 2, NaN].includes(NaN)); // TRUE!!!!!!!!!!
console.log(['1', '2', '3'].includes(3)); // false
