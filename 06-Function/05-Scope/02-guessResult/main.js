function makeWorker() {
    let name = 'Pete';
    return function () {
        alert(name);
    };
}
let name = 'John';
let work = makeWorker(); //work return function() {alert(name);};
work(); // alert "Pete" but not return anything
