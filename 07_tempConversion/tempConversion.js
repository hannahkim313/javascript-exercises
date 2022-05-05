const ftoc = function(f) {
    const c = (f - 32) * (5 / 9);
    return c;
};

const ctof = function(c) {
    const f = c * (9 / 5) + 32
    return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
