// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.

//P - a string of letters and an array of integers denoting indexes to remove
//R - the string after each letter has been removed by the index in the coords array
//E - lastSurvivor('kbc', [0, 1]), 'b'
//P -first we split the letters parameter into an array
// We then use a forEach on the coords array and for each element we splice the letters that have been split into an array
// On each element we splice(e,1) to remove that indexed 
// We then return the array joined as the answer

function lastSurvivor(letters, coords) {
    let ans = letters.split('')
    coords.forEach(e => ans.splice(e, 1))
    return ans.join('')
}