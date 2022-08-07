
let all=""

for (let first=2; first<=12; first++){
    let MultiplyResult = ""
    for (let multiply=1; multiply<=12; multiply++){
        MultiplyResult+= `${first} x ${multiply} = ${first*multiply} \n`
    }

    // console.log(`Multiplication table ${first} \n${MultiplyResult}\n`)
    all+=(`Multiplication table ${first} \n${MultiplyResult}\n`)
}
console.log(all)