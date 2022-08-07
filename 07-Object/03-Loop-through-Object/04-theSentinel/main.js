const createObject = () => {
    sentinel = "stop"
    newObj = {}
    do{
        key = prompt("Enter key");
        value = prompt("Enter value");
        if (key!==null && key.trim() !==""  && key !== sentinel && value !== sentinel){
            newObj[key] = value
        }
    }
    while (key!==null && key.trim() !==""  && key !== sentinel && value !== sentinel)
    return newObj
}
