let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };


  //clone function
function multipleNumeric(obj,num){
    newObject = {}
    for (key in obj){
        if (!isNaN(obj[key])){
            newObject[key] = obj[key]*num;
        }
        else {
        newObject[key] = obj[key];
        }
    }
    return newObject
}
console.log(multipleNumeric(menu,3))

