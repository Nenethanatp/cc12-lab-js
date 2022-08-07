function createFruitBasket() {
    let fruit = {}
    do {
        fruitName = prompt("Enter fruit name");
        number = prompt("Enter number of fruit");
        if (fruitName !== null && fruitName.trim() !== "") {
            number = Number(number)
            if (fruitName in fruit) {
                fruit[fruitName] += number
            }
            else {
                fruit[fruitName] = number
            }
        }
    }
    while (fruitName !== null && fruitName.trim() !== "")

    const newNameFruit = {}
    for (let item in fruit) {
        if (fruit[item] > 1) {
            itemwithS= item + "s"
            newNameFruit[itemwithS] = fruit[item]
        }
        else {
            newNameFruit[item] = fruit[item]
        }
    }
    return newNameFruit
}


console.log(createFruitBasket())
