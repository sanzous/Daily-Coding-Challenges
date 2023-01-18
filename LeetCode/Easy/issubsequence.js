/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//P - two strings
//R - true if the first string parameter is a subsequence of the second string parameter
//E - Input: s = "abc", t = "ahbgdc"
// Since abc can be found in ahbgdc as a subsequence 
// Output = true
//P - First we run an if statement for any edge cases where the first string would be longer than the second string
// We then set a variable called subsequence to 0. This will hold the current sub sequence length
// Inside the for loop we will check if the current s element using subsequence is equal to the current element in t during the loop.
// If it is then we have found the first element of the s parameter and we can'add' that element to the subsequence by incrementing it by 1. 
// Each time a parameter is found it'll add it to subsequence by incrementing as a way of adding the letters to the the subsequence and whenever we increment it we are now looking for the next letter
// We then check if subsequence is equal to the length of the s parameter since they should be the same length
var isSubsequence = function (s, t) {
    if (s.length > t.length) return false;
    let subsequence = 0;
    for (let i = 0; i < t.length; i++) {
        if (s[subsequence] === t[i]) {
            console.log(i)
            console.log(s[subsequence], t[i])
            subsequence++;
        }
    }
    return subsequence === s.length
};