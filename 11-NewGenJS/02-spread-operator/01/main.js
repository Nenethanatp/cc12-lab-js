const nums1 = [1, -2, 3, 4];
const nums2 = [8, 3, -8, 1];

const concatArray = [...nums1, ...nums2];
const ArrayWith5 = [5, ...nums1, -6, -1, ...nums2];

const sum = (number1, number2) => {
    newArray = [5, ...number1, -6, -1, ...number2];
    result = newArray.reduce((acc, item) => {
        acc += item;
        return acc;
    }, 0);
    return result;
};

console.log(ArrayWith5);

console.log(sum(nums1, nums2));
