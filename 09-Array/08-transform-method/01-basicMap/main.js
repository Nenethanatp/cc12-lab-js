const array = [1, 2, 30, 400];
let resultDouble = array.map((item,index,array) => item*2)
// result: [2, 4, 60, 800]

const array = [1, 2, 3, 4];
let result = array.map((item,index,array) => item.toString())
// result: ["1", "2", "3", "4"]

const array = [1, '1', 2, {}];
let result = array.map((item,index,array) => typeof item)
// result: ["number", "string", "number", "object"]

const array = ['apple', 'banana', 'orange'];
let result = array.map((item,index,array) => item.toUpperCase())
// result: ["APPLE", "BANANA", "ORANGE"]

const array = [1, 3, 4, 5, 6, 7, 8];
let result =array.map((item,index,array) => {
    if(item%2===0) {return "even"}
    else {return "odd"}}) 
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]

const array = [1, -3, 2, 8, -4, 5];
let result = array.map((item,index,array) => {if (item<0) {return (-item)}
                                             else {return (item)}})
// result: [1, 3, 2, 8, 4, 5]
result
const array = [100, 200.25, 300.84, 400.3];
let result = array.map((item,index,array)=> item.toFixed(2))
// result: ["100.00", "200.25", "300.84", "400.30"]

const array = [0, 5, 10, 7, 6, 5, 0];
let result = array.map((item,index,array) => {
    MONTH= ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    return (MONTH[item])
})
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array = [1, 16, 81, 256, 625, 1296];
let result = array.map((item,index,array) => item**4)
// result: [1, 2, 3, 4, 5, 6]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];

let result = array.map((item,index,array))
// result: ["apple", "banana", "watermelon"]

const array = [
  { name: 'apple', age: 14 },
  { name: 'banana', age: 18 },
  { name: 'watermelon', age: 32 }
];
// result: [14, 18, 32]

const array = [
  { name: 'apple', surname: 'London' },
  { name: 'banana', surname: 'Bangkok' },
  { name: 'watermelon', surname: 'Singapore' }
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-01' },
  { name: 'watermelon', birth: '1985-12-01' }
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]

onst array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
