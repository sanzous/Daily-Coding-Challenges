//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Given two integers as string
// Return the sum total of the two variables as a string
// Example if given '3' and '5' the function should return '8'
// The two variables need to converted into an integer and then added together. The total should then be converted to a string before returning the value

function sumStr(a,b) {
    return (Number(a) + Number(b)).toString()
  }