let summary = [];
const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 },
];

sales.forEach((item, index, array) => {
    console.log(item);
    if ('discount' in item) {
        summary[index] = { netPrice: item.price * (1 - item.discount) };
    } else {
        summary[index] = { netPrice: item.price };
    }
});
console.log(summary);
