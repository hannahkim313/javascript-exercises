const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
                .replace(/\s{2,}/g," ");
    const chars = string.split("");
    const charsReversed = [];

    for (let i = chars.length - 1; i >= 0; i--) {
        charsReversed.push(chars[i]);
    }

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== charsReversed[i]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
