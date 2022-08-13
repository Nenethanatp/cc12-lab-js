//sort by change the original array

const arr = [
    { name: 'John', age: 25 },
    { name: 'Leon', age: 26 },
    { name: 'Mick', age: 29 },
    { name: 'Pete', age: 30 },
    { name: 'Mary', age: 28 },
];

// less to more
// if a>b not change
// if b >a switch
arr.sort((a, b) => (a.age < b.age ? -1 : 1));
console.log(arr);
