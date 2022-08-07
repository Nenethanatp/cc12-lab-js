function sayHi(name) {
    let name = 'Guest';
    console.log(name); // error because name have been declare at function, cannot let again
}
sayHi('Jim');
