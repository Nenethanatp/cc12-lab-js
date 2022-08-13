const array1 = [1, 2, 30, 400];
let resultDouble = array1.map((item, index, array) => item * 2);
// result: [2, 4, 60, 800]

const array2 = [1, 2, 3, 4];
let result2 = array2.map((item, index, array) => item.toString());
// result: ["1", "2", "3", "4"]

const array3 = [1, '1', 2, {}];
let result3 = array3.map((item, index, array) => typeof item);
// result: ["number", "string", "number", "object"]

const array4 = ['apple', 'banana', 'orange'];
let result4 = array4.map((item, index, array) => item.toUpperCase());
// result: ["APPLE", "BANANA", "ORANGE"]

const array5 = [1, 3, 4, 5, 6, 7, 8];
let result5 = array5.map((item, index, array) => {
    if (item % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
});
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array6 = [1, -3, 2, 8, -4, 5];
let result6 = array6.map((item, index, array) => {
    if (item < 0) {
        return -item;
    } else {
        return item;
    }
});
// result: [1, 3, 2, 8, 4, 5]

const array7 = [100, 200.25, 300.84, 400.3];
let result7 = array7.map((item, index, array) => item.toFixed(2));
// result: ["100.00", "200.25", "300.84", "400.30"]

const array8 = [0, 5, 10, 7, 6, 5, 0];
let result8 = array8.map((item, index, array) => {
    const MONTH = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    return MONTH[item];
});
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array9 = [1, 16, 81, 256, 625, 1296];
let result9 = array9.map((item, index, array) => item ** 4);
// result: [1, 2, 3, 4, 5, 6]

const array10 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 },
];

let result10 = array10.map((item, index, array) => item.name);
console.log(result10);
// result: ["apple", "banana", "watermelon"]

const array11 = [
    { name: 'apple', age: 14 },
    { name: 'banana', age: 18 },
    { name: 'watermelon', age: 32 },
];
let result11 = array11.map((item) => {
    return item['age'];
});
console.log(result11);
// result: [14, 18, 32]

const array12 = [
    { name: 'apple', surname: 'London' },
    { name: 'banana', surname: 'Bangkok' },
    { name: 'watermelon', surname: 'Singapore' },
];
let result12 = array12.map((item) => {
    return item.name + ' ' + item.surname;
});
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array13 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-01' },
    { name: 'watermelon', birth: '1985-12-01' },
];

const result13 = array13.map((item) => {
    let year = item.birth.slice(0, 4);
    item.year = 2021 - Number(year);
    return item;
});
console.log(result13);
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

const array14 = [
    { name: 'apple', birth: '2000-01-01' },
    { name: 'banana', birth: '1990-10-10' },
    { name: 'watermelon', birth: '1985-12-30' },
];

const result14 = array14.map((item) => {
    MONTH = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ];
    [year, month, day] = item.birth.split('-');
    return `<tr><td>${item.name}<td><td>${day} ${
        MONTH[month - 1]
    } ${year}</td></tr>`;
});

console.log(result14);
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
