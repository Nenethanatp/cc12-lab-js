let input = Number(prompt("Enter number"));
let count = 0;

while (input>=1){
    console.log(input)
    let remainder = input%10;
    input = (input-remainder)/10;
    count+=1;
    } 
alert(count)
