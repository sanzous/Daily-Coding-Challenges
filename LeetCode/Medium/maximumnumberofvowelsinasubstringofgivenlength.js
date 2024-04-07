// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

// Example 1:

// Input: s = "abciiidef", k = 3
// Output: 3
// Explanation: The substring "iii" contains 3 vowel letters.
// Example 2:

// Input: s = "aeiou", k = 2
// Output: 2
// Explanation: Any substring of length 2 contains 2 vowels.
// Example 3:

// Input: s = "leetcode", k = 3
// Output: 2
// Explanation: "lee", "eet" and "ode" contain 2 vowels.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 'aeiou'
let result = 0 
let count = 0 // count of vowels of current window
for (var i = 0; i < s.length; i++) {
  if (i >= k) { // remove window's first character
    // if the window's first character is a vowel, subtract count
    if (vowels.includes(s[i - k])) {
      count--
    }
  }
      // add current character to window
  if (vowels.includes(s[i])) {
    // adds vowel to count
    count++
    result = Math.max(result, count)
    // max number of vowels
    if (result === k) {
      return k
    }
  }
}
return result
};