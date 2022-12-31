// Given an integer array nums and an integer val, remove all occurrences of val in nums in -place.The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
//P - an array of numbers and an integer value to remove from that array
//R - The array with all numbers removed
//E - Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
//P - First we create a for loop to go through the array, inside of the for loop we check if the current element
// is equal to the val to remove, if it is we then splice the current element out and iterate back 1 space to compensate  
// for the indexes moving. 
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1)
            i--
        }
    } return nums.length
};