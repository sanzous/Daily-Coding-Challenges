// Define String.prototype.toAlternatingCase(or a similar function/ method such as to_alternating_case / toAlternatingCase / ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
    const string = Object.values(this)
    for (let i = 0; i < string.length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            string[i] = string[i].toLowerCase()
        } else string[i] = string[i].toUpperCase()
    } return string.join('')
}