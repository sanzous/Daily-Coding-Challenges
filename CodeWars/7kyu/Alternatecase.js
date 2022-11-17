// Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD

//P - A string containing letters or words.
//R - The same string with each letter being the opposite case of what they were
//E - "Hello World", "hELLO wORLD"
//P - First we split the string into an array of elements with the elements being letters. Then we can use the map method
// We check each element, if the element is equal to its lowercase element then we return an uppercase, otherwise we return a lowercase.
// then we join the array and return that
function alternateCase(s) {
    return s.split('').map(e => e.toLowerCase() == e ? e.toUpperCase() : e.toLowerCase()).join('')
}