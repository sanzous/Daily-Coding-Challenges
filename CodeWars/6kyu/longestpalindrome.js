// Find the length of the longest substring in the given string s that is the same in reverse.

// As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

// If the length of the input string is 0, the return value must be 0.

// Example:
// "a" -> 1 
// "aab" -> 2  
// "abcde" -> 1
// "zzbaabcd" -> 4
// "" -> 0

// P -- A string of letters that can be of any length including 0
// R -- The longest palindrome in the given parameter
// E -- ("baabcd"), 4 as baab is the longest palindrome
// P -- We first check if the given parameter is fasly so we can return 0
// then we create a new variable to hold the palindromes
// We then loop through the array with a for loop
// we then put a nested for loop inside of the first for loop
// It will then go through each element adding one more element to the end.
// If its the same when reversed then its a palindrome.
// we then check if the palindrome is longer than the currently longest palindrome
// if it is the new palindrome length gets assigned to the longest palindrome length
// we then return the longest variable


longestPalindrome = function (s) {
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {

            let a = s.slice(i, j + 1)
            let b = s.slice(i, j + 1).split('').reverse().join('')
            if (a == b) {
                if (a.length > longest)
                    longest = a.length
            }

        }
    } return longest
}
