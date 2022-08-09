const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
result = [];
alphabets.forEach((item, index, array) => {
    if (item === 'a') {
        result.push(index);
    }
});

console.log(result);
