// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.

/**
 * @param {string[]} operations
 * @return {number}
 */

//P - an array of strings containing -- , ++ , and X in any order
//R - An integer after performing all the operations
//E - Input: operations = ["--X","X++","X++"]
// Output: 1
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// --X: X is decremented by 1, X =  0 - 1 = -1.
// X++: X is incremented by 1, X = -1 + 1 =  0.
// X++: X is incremented by 1, X =  0 + 1 =  1.
//P - First we set a variable to 0 to hold the running total
// Then we can loop through the given array with a forEach method. If the current element includes a - then we subtract from the running total otherwise if the element includes + then we add to the running total
//We then return the ans variable
var finalValueAfterOperations = function (operations) {
    let ans = 0;
    operations.forEach(e => e.includes('-') ? ans-- : e.includes('+') && ans++)
    return ans
};