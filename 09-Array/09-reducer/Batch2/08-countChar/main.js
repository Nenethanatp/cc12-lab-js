let str = 'I live in Thailand';
arr = [...str];
console.log(arr);
result = arr.reduce((acc, item, index) => {
    if (item === ' ') {
        return acc;
    } else if (item in acc) {
        acc[item] += 1;
    } else {
        acc[item] = 1;
    }
    return acc;
}, {});
console.log(result);
