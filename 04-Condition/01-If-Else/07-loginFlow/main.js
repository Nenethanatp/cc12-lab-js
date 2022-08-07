username = prompt("Enter Username");
password = prompt("Enter Password");

function correct(name){
    if (name===null || name.trim()===""){
        return false}
    else {return true}
}

if (correct(username) && correct(password)){
    if ((username==="admin"&& password==="1234")||username ==="john"&& password ==="qwerty"){
        alert("Hello " +username);
    }
    else {
        alert("invalid username or password")
    }
}
else if (correct(username)===false){
    alert("username is required")
}
else if (correct(password)===false){
    alert("password is required")
}