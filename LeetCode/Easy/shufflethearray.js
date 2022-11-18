// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

/**
* @param {number[]} nums
* @param {number} n
* @return {number[]}
*/

//P - An array of integers consisting of 2n elements in the form of [x1,x2,...,xn,y1,y2,...,yn] and a variable n containing an integer
//R - The array in the form of [x1,y1,x2,y2,...,xn,yn]
//E - Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
//P - First we need to split the array into two arrays, an array containing the x elements and the other array containing  y elements
var shuffle = function (nums, n) {
    let x = nums.slice(0, n)
    let y = nums.slice(n)
    let ans = []
    for (let i = 0; i < n; i++) {
        ans.push(x[i])
        ans.push(y[i])
    }
    return ans
};