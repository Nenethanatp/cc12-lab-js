function getAverageAge(array) {
    let sumResult = array.reduce((sumAge,item,index)=>{
      let age = item.age
      return item.age+sumAge}, 0)
    return (sumResult / array.length).toFixed(2)
    }