const nums = [7, 9, -5, -1, 0, 3];
console.log(
    nums.find((item, index, array) => {
        return item < 0;
    })
);
