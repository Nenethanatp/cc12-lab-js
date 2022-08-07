//alert(null || 2 || undefined); // 2 (first true)

//alert(alert(1) || 2 || alert(3)); // alert1 alert2 (first true)
//alert(undefined || true || ... ) //true (first true)

//alert(1 && null && 2); // null(first false)
//alert(alert(1) && alert(2)); alert1 undefined(first false is alert1)
//alert(1) && alert(2) == > alert1 undefined

// alert(null || (2 && 3) || 4); >> null || 3 || 4  >>> 3 