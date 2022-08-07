const sumNum = (...number) => {
    let ans = number.reduce((acc, item) => {
        acc *= item;
        return acc;
    }, 1);
    return ans;
};

console.log(sumNum(2, 3, 4));
