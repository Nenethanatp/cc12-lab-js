let checkPrime
let primeList ="";

for(let i=2; i<=100; i++){
    checkPrime = true
 for(let divide = 2; (divide <i ); divide++){
    if(i%divide===0){
        checkPrime = false;
        // console.log("false"+i +"/" +divide)
        break
    }
 }    
//  console.log(`i:${i}, ${divide}`)
 if (checkPrime === true){primeList += String(i)+ " "}
}
console.log(primeList)