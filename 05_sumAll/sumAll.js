const sumAll = function(a, b) {
    if (typeof a !== "number" || typeof b !== "number") return "ERROR"

    let numbers = [];
    let min;
    let max;
    let sum = 0;

    if (a < b) {
        min = a;
        max = b;
    } else {
        min = b;
        max = a;
    }

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
