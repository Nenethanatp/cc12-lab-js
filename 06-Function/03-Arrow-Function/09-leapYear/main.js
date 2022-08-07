const checkLeapYear = year =>{
    if (year%100 === 0) {return year%400==0}
    return year%4===0;
}


// const checkLeapYear = (year) => {
//     if (year%4==0 && year%100!=0){
//         return true
//     }
//     else if (year%100==0 && year%400==0){
//         return true
//     }
//     return false
// }