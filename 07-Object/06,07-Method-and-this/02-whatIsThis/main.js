var name = 'Joe';
function makeUser() {
    return {
        name: 'John',
        ref: this,
    };
}
let user = makeUser();  //called by window object
console.log(this)  //window

console.log(user.ref.name); // "Joe" (because window object name is same to var)


?????????????
