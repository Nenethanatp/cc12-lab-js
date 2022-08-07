// use if without else
function checkAge1(age){
    if (age>18){
        return true;
    }
    if (!(age>18)){
        return confirm("Did parents allow you")
    }
}

//use ternary operator instead if
function checkAge2(age){
return age>18 ? true : confirm("Did parents allow you?")
}

//use || instead if
function checkAge3(age){
    return(boolean(age>18) || confirm("Did parents allow you?"))
}

// if boolean(age>18) false, check next condition and return last value(or first true)