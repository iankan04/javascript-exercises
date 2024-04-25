const findTheOldest = function(arr) {
    const greatestAge = arr.reduce((oldest, current) => {
        const currentYear = (new Date()).getFullYear();
        if (!('yearOfDeath' in current)) {
            current.yearOfDeath = currentYear;
        } else if (!('yearOfDeath' in oldest)) {
            oldest.yearOfDeath = currentYear;
        }

        if (oldest == undefined || (oldest.yearOfDeath - oldest.yearOfBirth) < (current.yearOfDeath - current.yearOfBirth)) {
                oldest = current;
        } 
        return oldest;
    });
    return greatestAge;
};

// Do not edit below this line
module.exports = findTheOldest;
