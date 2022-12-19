// Given a string made of digits[0 - 9], return a string where each digit is repeated a number of times equals to its value.

//P - A string of integers
//R - The same string but with each integer repeated n times n being the integer
//E - "312", "333122"
//P - first we split the string into an array of individual integers. This way we can use the map method and inside the map method
//we return each element repeated e times. We then return the new array with the join method to turn it back into a string.

function explode(s) {
    return s.split('').map(e => e.repeat(e)).join('')
}