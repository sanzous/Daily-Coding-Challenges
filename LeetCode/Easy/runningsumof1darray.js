/**
 * @param {number[]} nums
 * @return {number[]}
 */
//P - an array of integers
//R - an array of integers with each integer being the running sum at that index
//E - Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
//P - First we set a running sum variable to 0 and an ans array to hold the answer
// We then create a for loop that traverses through the given parameter
// On each loop we add the current element to running sum and then push that to the ans array
var runningSum = function (nums) {
    let runningsum = 0;
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        runningsum += nums[i]
        ans.push(runningsum)
    } return ans
};