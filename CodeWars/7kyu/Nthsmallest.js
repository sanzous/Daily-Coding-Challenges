// Task
// Given an array / list of integers, find the Nth smallest element in the array.

//     Notes
// Array / list size is at least 3.
// Array / list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array / list's numbers could occur, so don't remove duplications.
//     Input >> Output Examples
// arr = [3, 1, 2]            n = 2 ==> return 2
// arr = [15, 20, 7, 10, 4, 3]   n = 3 ==> return 7
// arr = [2, 169, 13, -5, 0, -1] n = 4 ==> return 2
// arr = [2, 1, 3, 3, 1, 2], n = 3 ==> return 2 

//P - An array of integers and an integer to determine which Nth number to return
//R - The Nth smallest number
//E - [3,1,2], 2,  2 since 2 is the second smallest number
//P - We can accomplish this challenge by first sorting the array from smallest to biggest then calling the array index using the
// given pos variable and subtracting 1 since arrays start at 0

function nthSmallest(arr, pos) {
    return arr.sort((a, b) => a - b)[pos - 1]
}