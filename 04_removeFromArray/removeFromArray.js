const removeFromArray = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (arr.at(i) === arguments[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
