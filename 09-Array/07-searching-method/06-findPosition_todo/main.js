const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
];

result = tasks.findIndex((item) => {
    return item.id === 2;
});

console.log(result);
