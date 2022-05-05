const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR"

    let numbers = [];
    let sum = 0;
    const min = (a < b) ? a : b;
    const max = (a > b) ? a : b;

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
