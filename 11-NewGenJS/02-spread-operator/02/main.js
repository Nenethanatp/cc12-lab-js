function squareArray(array) {
    newArray = [...array];
    let result = newArray.map((item, index, array) => {
        if (index === 3) {
            item = item ** 2;
            return item;
        }
        return item;
    });
    return result;
}
console.log(squareArray([1, 2, 3, 4]));
