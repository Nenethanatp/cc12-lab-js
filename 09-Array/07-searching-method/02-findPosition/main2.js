const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
//  result = []
// for (index in alphabet){
//     match = alphabets.indexOf(("a",index)}
const result = [];
for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i] === 'a') {
        result.push(i);
    }
}

console.log(result);
