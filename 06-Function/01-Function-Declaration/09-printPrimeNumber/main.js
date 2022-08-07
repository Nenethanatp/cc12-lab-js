function checkPrime(num){
    let prime = true
    for (let i = 2; i < num; i++){
        if (num%i === 0){prime= false}
    }
    return (prime)
}


function displayPrime(number){
    let arrPrime = "";
    for (let i=2; i<=number; i++){
        if (checkPrime(i)) {arrPrime+=`${i} `}
    }
    return (arrPrime)
}


