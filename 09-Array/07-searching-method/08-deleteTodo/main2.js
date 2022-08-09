const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
];

function deleteTask(id) {
    let result = tasks.filter((item, index, array) => {
        return item.id !== id;
    });
    return result;
}

console.log(deleteTask(1));
