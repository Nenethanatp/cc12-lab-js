let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']

function checkAlphabet(array) {
    let result = array.reduce((acc, item, index) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
    return result;
}

checkAlphabet(alphabets);

// use set
console.log([...new Set(alphabets)]);
