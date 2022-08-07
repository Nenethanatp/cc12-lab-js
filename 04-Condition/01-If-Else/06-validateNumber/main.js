let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");

function checkNum(number){
if (number===null || number.trim()===""||isNaN(number)){
    return false
}
else {return true}
}

if (checkNum(num1) && checkNum(num2)){
    let sum = Number(num1)+Number(num2);
    alert(sum)
}
else{alert("Invalid number")}

