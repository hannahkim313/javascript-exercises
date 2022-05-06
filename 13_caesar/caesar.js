const caesar = function(string, num) {
    const chars = [];
    let newString = "";

    for (let i = 0; i < string.length; i++) {
        chars.push(string.charCodeAt(i));
        chars[i] = chars[i] + num;
        newString += String.fromCharCode(chars[i]);
    }

    return newString;
};

// Do not edit below this line
module.exports = caesar;
