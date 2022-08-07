let num1 =prompt("Enter first number");
let num2 =prompt("Enter second number");
let num3 = prompt("Enter third number");

let max;
let mid;
let min;

function checkNumber(num){
    if (num!==null && num.trim()!=="" && !isNaN(num)){return true}
    else {return false}
} 
if (checkNumber(num1) && checkNumber(num2) && checkNumber(num3)){
    num1=Number(num1);
    num2=Number(num2);
    num3=Number(num3);
    if (num1>=num2 && num1>=num3)
        {max = num1;
        if (num2>=num3){mid = num2; min = num3;}
        else{mid = num3; min = num2}
        }
    else if (num2>=num1 && num2>=num3)
        {max = num2;
        if (num1>=num3){mid = num1; min = num3;}
        else{mid = num3; min = num1}
        }
    else if (num3>=num1 && num3>=num2)
        {max = num3;
        if (num1>=num2){mid = num1; min = num2;}
        else{mid = num2; min = num1}
        }

    alert("Descending Sort: "+max+", "+mid+", "+min)
}


else{alert("Please enter only number")}