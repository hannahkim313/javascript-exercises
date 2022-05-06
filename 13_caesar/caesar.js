const caesar = function(string, num) {
    const chars = [];
    
    for (let i = 0; i < string.length; i++) {
        chars.push(string.charCodeAt(i));
        chars[i] = chars[i] + num;
    }

    return String.fromCharCode(chars);
};

// Do not edit below this line
module.exports = caesar;
