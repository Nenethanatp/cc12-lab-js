คำสั่ง alert ในแต่ละบรรทัดจะแสดงค่าเป็นอะไรบ้าง

```js
alert(null || 2 || undefined); // 2 first true
alert(alert(1) || 2 || alert(3)); //2
alert(1 && null && 2); // first false null
alert(alert(1) && alert(2)); //undefined
alert(null || (2 && 3) || 4); //null || 3 || 4   => alert 3
```
