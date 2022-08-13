let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

function createObjectName(array) {
    const result = array.reduce((acc, item) => {
        if (!(item in acc)) {
            acc[item] = 1;
        } else acc[item] += 1;
        // console.log(acc)
        return acc;
    }, {});
    return result;
}
console.log(createObjectName(names));
