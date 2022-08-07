// function squareArr(inputArray){
//     result=[]
//     for (item of inputArray){
//         result.push(item**2)
//     }
//     return result
// }

// const arr = [2, 3, 5, 7, 11];
// squareArr(arr); // [4, 9, 25, 49, 121]

function squareArr(arr) {
    const result = [];
    arr.forEach((item, index, array) => {
        result[index] = item ** 2;
    });
    return result;
}

console.log(squareArr([2, 3, 4, 5]));

// function squareArr(arr) {
//     const resultArr = []

//     // Logic ==> LOOP every item

//     arr.forEach((item,index) => {
//         // let squareNum  =  item ** 2
//         // resultArr.push(squareNum)
//         // resultArr[index] = item ** 2
//     })

//     // for(let item of arr) {
//     //     resultArr.push(item**2)
//     // }

//     // for(let index in arr) {
//     //     resultArr[index] = arr[index] ** 2
//     // }

//     return resultArr
// }
// const arr = [2, 3, 5, 7, 11];
// console.log(squareArr(arr))
