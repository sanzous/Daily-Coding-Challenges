// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

//P - An array of integers
//R - The amount of good pairs in the array where a good pair is nums[i] === nums[j] and i < j
//E - Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
//P - First we create a variable to hold the amount of goodPairs
// Then we create a loop to loop through the array and then an inner loop to loop through the rest of the array while holding the current element with the first for loop. We then check in the nested loop if  nums[i] === nums[j] and i < j
//If it is we increment goodPairs and then we return the goodPairs as the answer

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let goodPairs = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && i < j) {
                goodPairs++
            }
        }
    } return goodPairs
};