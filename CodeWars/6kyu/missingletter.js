// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

function findMissingLetter(array) {
    let newarr = array.map(e => e.charCodeAt(0))
    let ans;
    for (let i = 0; i < newarr.length - 1; i++) {
        if (newarr[i] + 1 !== newarr[i + 1]) {
            ans = newarr[i + 1]
        }
    } return String.fromCharCode(ans - 1)
}