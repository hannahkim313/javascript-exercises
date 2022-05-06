const getTheTitles = function(a) {
    const titles = [];

    for (let i = 0; i < a.length; i++) {
        titles.push(a[i].title);
    }

    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
