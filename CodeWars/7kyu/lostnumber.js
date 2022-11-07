// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

//P -- An array and then the same array with a different sorted order and a missing number
//R -- The missing integer if any or 0 if it isn't
//E -- [1,2,3,4,5], [3,4,1,5], 2
//P -- we can apply the filter method and set the parameters for the filter for if mixArr doesn't include the current element
// we will then be left with an array containing either no elements or the missing integer

function findDeletedNumber(arr, mixArr) {
    const deleted = arr.filter(e => !mixArr.includes(e))
    return !deleted[0] ? 0 : deleted[0]
}