function nameAndHobbies(firstName, lastName, ...hobby) {
    let numberOfHobbies = hobby.length;
    return { firstName, lastName: lastName, hobby, numOfHobbies: hobby.length };
}
console.log(nameAndHobbies('nene', 'laws', 'sport', 'music'));
