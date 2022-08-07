function ucFirst(str){
    if (!str){return "Not allow empty string"}
    else{
    let newStr = str.trim();
    let strSlice = newStr.slice(0,1);
    let leftStr = newStr.slice(1);
    
    return strSlice.toUpperCase()+leftStr
    }
}
console.log(ucFirst(""))