let input = Number(prompt("Enter number")) 
let number = input
let count= 0
if (number==0){count=1}
else{while (number>=1){
    count++; 
    number = number/10; }
}
alert(`${input}: have ${count} digits`)