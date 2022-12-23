// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

//P - An array of array of integers
//R - The largest integer sum among the array of integers inside the array
//E - Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation: 
// 1st customer has wealth = 6
// 2nd customer has wealth = 10 
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.
//P - We will return the Math.max of accounts we spread. Inside the accounts we create a new array using the map method and inside each element for the map method we will reduce each array of integers down to one number summing each number

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return Math.max(...(accounts.map(e => e.reduce((p, c) => p + c, 0))))
};