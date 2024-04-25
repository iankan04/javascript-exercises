const palindromes = function (str) {
    const stripped = str.split('').filter((c) => /^[a-zA-Z0-9]/.test(c)).join('').toLowerCase();
    return stripped === reversed(stripped);
};

function reversed(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Do not edit below this line
module.exports = palindromes;
