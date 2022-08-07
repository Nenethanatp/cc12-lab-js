

const emptyObject = (object) => {
    for (item in object){
        return false
    }
    return true
}

emptyObject({n:"nene", p:"pi"})