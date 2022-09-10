// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function (name) {
    let greetedName = name.toLowerCase().split('')
    greetedName[0] = greetedName[0].toUpperCase()
    return `Hello ${greetedName.join('')}!`
};