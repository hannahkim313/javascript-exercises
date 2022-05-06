const findTheOldest = function(a) {
    const oldestPerson = a.reduce((prevPerson, currentPerson) => {
        if (prevPerson.yearOfDeath === undefined) {
            const today = new Date();
            prevPerson.yearOfDeath = today.getFullYear();
        }

        let oldestAge = prevPerson.yearOfDeath - prevPerson.yearOfBirth;
        let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;

        return (currentAge > oldestAge) ? currentPerson : prevPerson;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
