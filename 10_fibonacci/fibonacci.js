const fibonacci = function(a) {
    if (a < 0) return "OOPS";
    
    const numbers = [];

    for (let i = 0; i < 25; i++) {
        if (i === 0) {
            numbers.push(1);
        } else if (i === 1) {
            numbers.push(0 + numbers[i - 1]);
        } else {
            numbers.push(numbers[i - 2] + numbers[i - 1]);
        }
    }
    return numbers[a - 1];
};

// Do not edit below this
module.exports = fibonacci;
