- ให้สร้างฟังก์ชันคูณตัวเลขสองตัว โดยเขียนในรูปแบบ Arrow Function
- ให้ลองเรียกใช้ฟังก์ชันโดยหาผลคูณของ 23 กับ 9



let myFunc = function(a,b,c,d){
    return a+b+c+d
}
let x = myFunc(1,2,3,4)
console.log("x: "+x )


let myArrowFunc = (a,b,c,d) => a+b+c+d
let y = myArrowFunc(1,2,3,4)
console.log("y: "+ y)

let plusThree = num =>num+5

let cal = (balance, rate) =>{
    let interest = balance*rate;
    return interest
}
