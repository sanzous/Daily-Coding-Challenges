// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

//P - A string of an integer
//R - the minimum number of positive deci-binary numbers so that they sum up to the paramater
//E - Input: n = "32"
// Output: 3
// Explanation: 10 + 11 + 11 = 32
//P - We know that each deci binary number can only contain 1 or 0. 
//Knowing this we know the minimum needed is whatever the highest digit in the number given is. So we just need to find the largest integer in the given string.
//We can create a variable to hold 0. Then we loop through the string use a for loop. If the current element is bigger than the variable then we replace the variable value with the current element. We then return the variable as the answer

/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let ans = '0';

    for (const c of n) {
        if (c > ans) ans = c;
    }

    return ans;
};