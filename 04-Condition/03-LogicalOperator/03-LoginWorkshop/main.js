let user  = prompt("Enter username");
let password;

if (user ==="codecamp"){
    password = prompt("Enter password")
    if (password !=="123456"){
        alert("Wrong Password")
    }
    else (alert(`Welcome ${user}`))
}

else if (user===null||user.trim()==="" || user!=="codecamp"){
    user = "guest"

alert(`Welcome ${user}`)
}
