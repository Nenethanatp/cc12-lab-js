arr = [2, 3, 4, 5, 6];

let removeRandom = (arr) => {
    newArr = [...arr];
    const random = Math.floor(Math.random() * arr.length);
    newArr.splice(random, 1);
    return newArr;
};

console.log(removeRandom(arr));
