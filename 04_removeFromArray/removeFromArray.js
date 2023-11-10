const removeFromArray = function(inputArray, ...extras) {
    let element;
    let arr1 = inputArray, arr2 = [];
    for (element of extras) {
        arr2 = arr1.filter(number => number !== element);
        arr1 = arr2;
    }
    return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
