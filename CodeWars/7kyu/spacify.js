// Modify the spacify function so that it returns the given string with spaces inserted between each character.

// spacify("hello world") // returns "h e l l o   w o r l d"
//P - a string of letters and integers.
//R - the same string but with a space between each element
//E - 'hello world' ,'h e l l o   w o r l d'
//P - First we split the string and then we can join it with a space between each

function spacify(str) {
    return str.split('').join(' ')
}