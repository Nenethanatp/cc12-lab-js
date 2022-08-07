const name = prompt('Enter product');
const amount = Number(prompt('Enter amount of product'));
const price = Number(prompt('Enter price per piece'));
const discount = Number(prompt('Enter discount'));

// const name = 'iphone';
// const amount = 4;
// const price = 1000;
// const discount = Number(5);

cart = { name, amount, price };

if (discount !== 0 && !isNaN(discount)) {
    cart.discountPercent = discount;
}

cart.calNetPrice = function () {
    if (this.discountPercent) {
        const netPrice = this.price * (1 - this.discountPercent / 100);
        this.netPrice = netPrice;
        return alert('Succesful add net price to cart');
    }
    return alert('No discount');
};

console.log(cart);
console.log(cart.calNetPrice()); //return undefined but do method to create netPrice
cart;
