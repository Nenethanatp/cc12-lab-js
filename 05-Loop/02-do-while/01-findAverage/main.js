let sum = 0;
let count = 0;
let checkNaN=true;
function checkNum(num){
    if (num === null || num.trim() ==="" || Number(num <=0))
        {return false}
    else if (isNaN(num)) {
        checkNaN = false;
        return false;
    }
    else {return true}}

do{
    input = prompt("Enter number");
    if (checkNum(input) || input<0){
        sum += Number(input);
        count++
    }
    
} while (checkNum(input))

if (count>0) {
let avg = sum/count;
alert(`sum: ${sum.toFixed(2)}, avg: ${avg.toFixed(2)}`)}

 