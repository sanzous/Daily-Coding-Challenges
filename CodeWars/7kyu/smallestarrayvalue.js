// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0
//P - an array of integers and a variable 
//R - the smallest integer value in the array or its index
//E - [1,2,3,4,5], 'value', 1
// [1,2,3,4,5], 'index', 0
//P - First we create two variables to hold a value and its index
// Then we use a for loop and loop through the array, on the first loop we set the first element and its index to the variables value and index
// on each succeeding loop we check to see if the current array element is smaller than what is currently in the value variable
//if it is we then replace the value with the current array element and the index with the current array element index
// we then check if toReturn is value or index and return the correct variable

function min(arr, toReturn) {
    let value;
    let index;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            value = arr[i]
            index = i
        } else if (arr[i] < value) {
            value = arr[i]
            index = i
        }
    } return toReturn === 'value' ? value : index
}