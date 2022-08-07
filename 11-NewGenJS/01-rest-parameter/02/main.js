const filterOutOdds = (...num) => {
    const ans = num.filter((item) => item % 2 === 0);
    return ans;
};
console.log(filterOutOdds(1, 3, 24, 28, 12));
