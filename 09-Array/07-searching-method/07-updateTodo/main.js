const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' },
];

const updateTask = (id, newName) => {
    result = tasks.map((item, index, array) => {
        if (item.id === 2) {
            item.name = newName;
        }
        return item;
    });
};

updateTask(2, 'Travelling');

console.log(tasks);
