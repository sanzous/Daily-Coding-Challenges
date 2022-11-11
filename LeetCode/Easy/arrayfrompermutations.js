// Given a zero-based permutation nums (0-indexed), build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

// A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

/**
 * @param {number[]} nums
 * @return {number[]}
 */
//P - An array of distinct integers
//R - An array of the same length where the newarr[i] = paramater[paramater[i]]
//E - [0,2,1,5,3,4], [0,1,2,4,5,3]
//P - we can use a map method on the given array paramater, inside the map method we give the parameters 
var buildArray = function (nums) {

    return nums.map((e, i, a) => a[a[i]])
};