let result =""
for (let row = 1; row<=4; row++){
	for (let col = 1; col<=row; col++){
    result+="*"
  }
  result+="\n"
}

console.log(result)
