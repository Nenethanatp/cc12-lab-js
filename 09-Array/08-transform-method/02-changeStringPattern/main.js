function changeToCamelCase(string) {
    splited = string.split('-');
    console.log(splited);
    firstUpperArr = splited.map((item, index) => {
        if (index == 0) {
            return item;
        } else {
            first = item.slice(0, 1);

            return first.toUpperCase() + item.slice(1);
        }
    });
    camel = firstUpperArr.join('');
    return camel;
}
console.log(changeToCamelCase('background-color'));
