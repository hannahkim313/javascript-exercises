const removeFromArray = function(array, a, ...params) {
    // Create single array for comparison
    params.unshift(a);

    for (let i = 0; i <= params.length - 1; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] === params[i]) {
                array.splice(j, 1);
                // break;
            } else {
                continue;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
