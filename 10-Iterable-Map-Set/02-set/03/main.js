const values = [1, 4, 8, 2, 1, 3, 3, 8];

set = new Set(values)
values = Array.from(set)

console.log(unique(values)); // [1, 4, 8, 2, 3]