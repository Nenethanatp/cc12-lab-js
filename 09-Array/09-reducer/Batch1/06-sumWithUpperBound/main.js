let str = '31 45 12 67 34 86 23 37 19 41';

sumArr = str.split(' ').reduce((sum, item) => {
    return Number(item) < 40 ? (sum += Number(item)) : (sum += 0);
}, 0);
// console.log(numAr);
console.log(sumArr);
