const caesar = function(string, shift) {
    const chars = [];
    const upperUni = [];
    const lowerUni = [];
    let newString = "";

    for (let i = 65; i < 91; i++) upperUni.push(i);
    for (let i = 97; i < 123; i++) lowerUni.push(i);

    for (let i = 0; i < string.length; i++) {
        chars.push(string.charCodeAt(i));

        if (chars[i] >= 65 && chars[i] <= 90) {
            chars[i] = (chars[i] + shift > 90) ?
                upperUni[(shift - (upperUni[25] - chars[i])) - 1] :
                chars[i] = chars[i] + shift;
        }

        if (chars[i] >= 97 && chars[i] <= 122) {
            chars[i] = (chars[i] + shift > 122) ?
                lowerUni[(shift - (lowerUni[25] - chars[i])) - 1] :
                chars[i] = chars[i] + shift;
        }

        newString += String.fromCharCode(chars[i]);
    }
    return newString
};

// Do not edit below this line
module.exports = caesar;
