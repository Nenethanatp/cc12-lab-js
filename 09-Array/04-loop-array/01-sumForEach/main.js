const array = [29, 17, 13, 47, 23, 31];
let sum=0
array.forEach((item,index,array) => {return sum +=item})
console.log(sum)


//format for in

// sum=0
// for (let i in array){
//     sum+=array[i]
// }
// console.log(sum)



// format for of

// sum=0
// for (let item of array){
//     sum+=item
// }
// console.log(sum)