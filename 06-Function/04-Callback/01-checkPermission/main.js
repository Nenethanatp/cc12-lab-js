let checkPermission = (role, ok, no) => {
    if (role === 'ADMIN') {
        ok();
        console.log('Do admin Function');
    } else if (role !== 'ADMIN') {
        no();
    }
};

let adminFunc = () => alert('ACCESS GRANTED');
let notAdminFunc = () => alert('ACCESS DENIED');

console.log(checkPermission('ADMIN', adminFunc, notAdminFunc));
