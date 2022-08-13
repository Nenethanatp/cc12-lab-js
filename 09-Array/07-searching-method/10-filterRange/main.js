const filterRange = (arr, a, b) => {
    const [min, max] = [a, b].sort(function (a, b) {
        return a - b;
    });

    result = arr.filter((item) => {
        return item >= min && item <= max;
    });
    return result;
};

console.log(filterRange([1, 4, 8, 3, 8, 9, 12], 2, 9));
