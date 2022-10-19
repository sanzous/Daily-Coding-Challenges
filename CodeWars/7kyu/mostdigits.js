// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//P -- An array of numbers.
//R -- The element in the array that contaisn the most amount of digits. If there are multiple elements return the first one in the array by index
//E -- [1, 10, 100], 100
//P -- First we create a new variable holding the array parameter that has been mapped where each element will be modified with the toString method
// We then sort the new array by length and return the first element of that new array

function findLongest(array) {
    let newarr = array.map(e => e.toString())
    return +newarr.sort((a, b) => b.length - a.length)[0]
}