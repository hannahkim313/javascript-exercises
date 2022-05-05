const removeFromArray = function(array, n) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === n) {
            array.splice(i, 1);
            return array;
        } else {
            continue;
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
