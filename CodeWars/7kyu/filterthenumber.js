// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//P -- a string containing numbers and letters
//R -- the string turned into an integer only containing the numbers
//E -- "123", 123
//P -- first we split the given parameter into an array. then we filter the array using isNaN and making the element into an integer and accepting only elements that aren't NaN
// we then join the filtered arrray and return that is a number by either using the + operator or another method

var filterString = function (value) {
    return +value.split('').filter(e => !isNaN(+e)).join('')
}