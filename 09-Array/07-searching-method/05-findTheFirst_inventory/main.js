const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
];
// const result = inventory.filter((item) => {
//     return (item.name === 'cherries');
// });

// console.log(...result);

const result = inventory.find((item) => item.name === 'cherries');
console.log(result);
