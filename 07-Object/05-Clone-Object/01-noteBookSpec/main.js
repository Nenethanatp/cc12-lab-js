const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD',
};

//   use for..in method
const notebook1 = {};
for (let key in notebook) {
    notebook1[key] = notebook[key];
}

//use object.assign method

const notebook2 = {};
Object.assign(notebook2, notebook);
//or
const notebook3 = Object.assign({}, notebook);

// by rest parameter
const notebook4 = { ...notebook };
