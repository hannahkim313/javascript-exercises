const removeFromArray = function(array, a, ...params) {
    params.unshift(a);

    for (let i = 0; i < params.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === params[i]) delete array[j];
        }
    }

    array = array.filter(x => x !== undefined);

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
