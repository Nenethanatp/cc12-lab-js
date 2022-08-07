let answer;
let guess;
let countGuess = 0;

answer = Number(prompt("First player enter the answer between 1-99"))
if (answer>99 || answer <1){
    alert("Invalid range")
}
else{
    do{
        guess = prompt("Guess number between 1-99")
        if (guess!==null){
            if (guess>99 || guess <1){
                alert("Invalid range")
            }
            else {
                countGuess++
                if (Number(guess) < answer){
                    alert(`It's greater than ${guess}`)
                }
                else if (Number(guess)>answer){
                alert(`It's less than ${guess}`)
                }
            }
        }
    }
    while(answer!== Number(guess) && guess !==null) 
}

if (guess !== null && answer ===Number(guess)){
    alert(`Correct! Answer is ${answer}, You try ${countGuess} times.`)}