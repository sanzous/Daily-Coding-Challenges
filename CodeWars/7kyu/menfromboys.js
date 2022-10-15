// Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys

//P -- An array of integers can be negative, can be positive ,numbers can repeat
//R -- An array with the even numbers in ascending order followed by the odd numbers in descending order
//E -- menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
//P -- We create two new arrays, one array to hold even numbers, and one array to hold odd numbers.
// We then loop through the array given and set a conditional within the loop. If the number is even put it in the evens array and do the same for the odd array
// We then sort the evens array in ascending order then the odds array in descending order.
// We then concanate the two arrays with the evens array going first.

function menFromBoys(arr) {
    let evens = []
    let odds = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            if (!evens.includes(arr[i])) {
                evens.push(arr[i])
            }
        } else {
            if (!odds.includes(arr[i])) {
                odds.push(arr[i])
            }
        }
    }
    return evens.sort((a, b) => a - b).concat(odds.sort((a, b) => b - a))
}