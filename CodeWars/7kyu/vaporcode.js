// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

// Note that spaces should be ignored in this case.

//P - a string of words
//R - the string split into VAPORCODE by making every letter uppercase and putting two spaces or special characters between them
//E - "Lets go to the movies","L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//P - first we take the string and split it into an array of letter. Then we can use the map method to create a new array with each letter uppercased with the toUpperCase method
// we then filter out any empty elements using the filter method. Then use the join method giving the parameters of two empty spaces and return that from the function

function vaporcode(string) {
    return string.split('').map(e => e.toUpperCase()).filter(e => e !== ' ').join('  ')
}