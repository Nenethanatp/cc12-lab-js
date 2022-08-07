const deposit = 100000 ;
const interest = 2.5;
let total = deposit;

for (i=1; i<=10; i++){
    total+=interest*total/100;
}

console.log(`Total deposit 10 years: ${total.toFixed(2)} THB`)
