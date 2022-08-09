const employees = {
    john: {
        salary: 1000,
        address: { district: 'Ratchathewi', province: 'Bangkok' },
    },
    peter: {
        salary: 1500,
        address: { district: 'Pathumwan', province: 'Bangkok' },
    },
    mike: {
        salary: 800,
        address: { district: 'Pakkret', province: 'Nonthaburi' },
    },
    sarah: {
        salary: 2200,
        address: { district: 'Sriraja', province: 'Chonburi' },
    },
};

const employee = prompt('Enter employee name');
if (employee in employees) {
    result = `name: ${employee}, salary: ${employees[employee].salary}, address: ${employees[employee].address.district}, ${employees[employee]['address']['province']}`;
    console.log(result);
} else console.log('Not Found');
