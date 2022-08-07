let first = (arr,n) =>{
    if (n === undefined || n==1){
        return (arr[0])
    }
    else if (n>=1){
        return (arr.slice(0,n))
    }
}

