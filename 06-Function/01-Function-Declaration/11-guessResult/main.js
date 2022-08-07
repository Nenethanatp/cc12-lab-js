function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // // undefined, there are no sayHi variable
console.log(sayHi(10)); // // undefined, function sayHi don't return anything (but alert "Hi Kid")

function sayHi(name) {
    if (name) {
        alert('Hi ' + name);
        return;
    } else {
        return 'Who are you';
    }
}
console.log(sayHi('John')); // //undefined, but alert "Hi John" because Boolean("john") is true,
console.log(sayHi()); // return "Who are you" because name is unedfined (boolean is false)
