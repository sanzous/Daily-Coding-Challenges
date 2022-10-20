// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.


//P -- We are given an array of numbers, numbers can repeat, wont be negative
//R -- The sum of the numbers in the array that are not repeating
//E -- [4,5,7,5,4,8]),15 because 8 and 5 dont repeat and the sum is 15
//P -- we create an empty object. We then loop through the given array and if the current array element isnt
// in the object, We insert that element as a key and give it a value of 1. If the current element already exists in the object we increment the value by 1.
// We can then create a new variable called sum, and then we can loop through the object and any key with a value of 1
// we add to the new variable called sum

function repeats(arr) {
    let obj = {}
    let sum = 0
    arr.forEach(e => {
        obj[e] = obj[e] ? obj[e] + 1 : 1
    })
    for (const property in obj) {
        if (obj[property] == 1) {
            sum += +property
        }
    }
    return sum

};