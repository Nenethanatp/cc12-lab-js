let sum=0;
let sumEven=0;
let sumOdd=0;
let sumTwoSquare=0;
let sumThreeSquare=0;


for (let i=1; i<=100; i++){
    if (i%2===0){
        sumEven+=i;
        sumTwoSquare +=i**2;
    }
    else {
        sumOdd +=i;
    }

    if (i%3===0){
        sumThreeSquare += i**2
    }
    sum+=i;
}

let result = sumTwoSquare - sumThreeSquare;
console.log(`sum: ${sum}`)
console.log(`sum Even number: ${sumEven}`)
console.log(`sum Odd number: ${sumOdd}`)
console.log(`result: ${result}`)
