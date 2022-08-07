function max(a, b, c, d) {
    if (a == undefined) {
        return undefined;
    } else if (b == undefined) {
        return a;
    } else if (c == undefined) {
        return Math.max(a, b);
    } else if (d == undefined) {
        return Math.max(a, b, c);
    }

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
        return 'Some input is not a number';
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(max(1, 9, undefined, 7));
// function max(a = "", b = "", c = "", d = ""){
//     if
//     return Math.max(a,b,c,d)

// }
