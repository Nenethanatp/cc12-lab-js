const input = prompt("Enter number");
let sum = 0
let change = input
while(change!=0){
    let remainder = change%10;
    sum+= remainder;
    change=(change-remainder)/10
}
alert(`${input} sum: ${sum}`)

