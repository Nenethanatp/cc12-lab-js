const nums = [-3, 2, 11, -7, 4, 6];

let result = nums.reduce((multiply,item,index,array) => 
multiply *item,
1
)

console.log(result)