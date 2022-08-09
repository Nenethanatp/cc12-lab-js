const array1 = [9, 17, 23, 5];
// ค่าที่มากกว่า 10
const result1 = array1.filter((item, index, array) => item >= 10);
console.log(result1);

const array2 = [1, 2, 3, 4];
// ค่าที่เป็นเลขคี่
const result2 = array2.filter((item, index, array) => item % 2 !== 0);
console.log(result2);

const array3 = [1, '1', 2, {}];
// ค่าที่ประเภทข้อมูลเป็น Number
const result3 = array3.filter((item, index, array) => {
    return typeof item === 'number';
});
console.log(result3);

const array4 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const result4 = array4.filter((item) => {
    return item.length > 6;
});
console.log(result4);

const array5 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const result5 = array5.filter((item) => {
    return item > 0;
});
console.log(result5);

const array6 = [1, 3, 4, 5, 6, 7, 8];
const result6 = array6.filter((item) => item % 3 === 0);
console.log(result6);
// ค่าที่หาร 3 ลงตัว

const array7 = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// ค่าที่ขึ้นต้นด้วยตัว E
result7 = array7.filter((item) => {
    return item.startsWith('E');
});
console.log(result7);

const array8 = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
const result8 = array8.filter((item) => {
    return item === item.toUpperCase();
});
console.log(result8);

const array9 = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi', 'Phrae'];
// ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
const result9 = array9.filter((item) => {
    return item.toLowerCase().includes('buri');
});
console.log(result9);

const array10 = [
    { name: 'Ben', age: 14 },
    { name: 'Phil', age: 18 },
    { name: 'John', age: 32 },
    { name: 'Ann', age: 16 },
    { name: 'Paul', age: 24 },
];
const result10 = array10.filter((item, index) => item.age >= 18);
console.log(result10);
// อายุไม่น้อยกว่า 18

const array11 = [
    { id: 1, name: 'Pepsi' },
    { id: 2, name: 'Mirinda' },
    { id: 3, name: 'Coke' },
    { id: 4, name: 'Fanta' },
    { id: 5, name: 'Sprite' },
];
const result11 = array11.filter((item) => item.id !== 4);
console.log(result11);
// id ไม่เท่ากับ 4

const array12 = [
    { name: 'John', birth: '2001-07-31' },
    { name: 'Jack', birth: '1990-06-24' },
    { name: 'Jim', birth: '1984-12-13' },
    { name: 'Jeff', birth: '1996-02-05' },
    { name: 'Joe', birth: '2002-06-13' },
];

const result12 = array12.filter((item) => {
    const month = item.birth.slice(5, 7);
    return month === '06';
});
console.log(result12);
// เกิดเดือน 6
