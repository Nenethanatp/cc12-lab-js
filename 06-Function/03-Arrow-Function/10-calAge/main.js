const checkLeapYear = (year) => {
    if (year%4==0 && year%100!=0){
        return true
    }
    else if (year%100==0 && year%400==0){
        return true
    }
    return false
}

const calAge = (year) =>{
    let dayAge = 0;
    for (year; year<=2020; year++){
        if (checkLeapYear(year)){dayAge+= 366}
        else (dayAge+=365) 
    }
    return (dayAge)
}
