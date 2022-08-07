let user = {
    name: 'John',
    sayHi: function () {
        console.log(this.name);
    },
};

user.sayHi(); // * log "John" (because it run function user.sayHi())
