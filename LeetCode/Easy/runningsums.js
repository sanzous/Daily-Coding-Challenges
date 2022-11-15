// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//P - an array of integers
//R - an array of integers where runningSum[i] = sum(nums[0]…nums[i]
//E - Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
//P - We first create a new array to hold the ans
// We then create a variable to hold the current running sum and set that to 0
// We can then loop through the nums array and at index add that to the current runningsum and push it to the ans array
// We then return the ans array
var runningSum = function (nums) {
    let ans = []
    let runningsum = 0
    for (let i = 0; i < nums.length; i++) {
        runningsum += nums[i]
        ans.push(runningsum)
    } return ans
};