// return f() because it's the return of magic()

//return 1337*42 (it's the result of function(42))
//answer(1337) is same to magic()(1337)

//return 42*42 because magic(1337) return function(42) so return 42*42

function magic() {
    return function (x) {
        return x * 42;
    };
}
const answer = magic();
console.log(answer); // return f() because it's the return of magic() it is function (x) {return x * 42};
console.log(answer(1337)); // return 1337*42
console.log(magic()(1337)); // 56154 === 1337 * 42 //same to above
console.log(magic(1337)(42)); // return 42*42 because magic(1337) return function(42) so return 42*42
