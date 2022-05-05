const sumAll = function(a, ...params) {
    params.unshift(a);
    params.sort();

    let numbers = [];
    const min = params[0];
    const max = params[params.length - 1];
    let sum = 0;

    if (min < 0) return "ERROR";
    
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
