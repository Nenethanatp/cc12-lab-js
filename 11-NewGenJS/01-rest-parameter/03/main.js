const mergeObject = (...object) => {
    let revObj = object.reverse();
    console.log(revObj);
    result = revObj.reduce((newMerge, item) => {
        newMerge = Object.assign(newMerge, item);
        return newMerge;
    }, {});
    return result;
};

console.log(mergeObject({ name: 'Nene' }, { age: 25 }, { age: 23 }));
