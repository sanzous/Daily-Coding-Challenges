/**
 * @param {number[]} nums
 * @return {number}
 */

//P - An array of integers
//R - the index where the left and right sums are equal
//E - Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
//P - If we find the total sum of the array and set that as the right sum and then
// set a variable to 0 as left sum we can then go through each element and add to left and subtract from the right until both sides are equal
// on each loop we'll subtract rightsum from the current element then we'll check if right and left are equal. if it is we can return the current index.
//If not we then add that to left sum and continue to the next loop
//If we go through the whole loop with no hits we return -1
var pivotIndex = function (nums) {
    let rightsum = nums.reduce((p, c) => p + c)
    let leftsum = 0
    for (let i = 0; i < nums.length; i++) {
        let current = nums[i]
        rightsum -= current
        if (leftsum === rightsum) {
            return i
        }
        leftsum += current
    } return -1

};