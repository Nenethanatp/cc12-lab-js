const arr = [1, 2, 4];
const newArr = arr;

arr[0] = 3;
console.log(newArr[0]); // *

// 3 because assign the new value get the same address (sameas object)
//copy by reference
