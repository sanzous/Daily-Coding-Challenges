// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

//P - a string containing letters numbers and special characters
//R - a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.
//E - "Codewars@codewars123.com"),[1,18,3,2]
//P - first we create the ans array with the values of 0,0,0,0
//then we split the given string into an array and iterate through it with the forEach method
//We then check the ascii code value of the current element, if its equal to a lowercase value letter ( 64 > e > 91) we iterate one on ans[0]
// We then do the same for uppercase ( 96 > e > 123) we incerement ans[1]
// If isNaN when we turn e into a number is false then we incremenet ans[2]
// else we just increment ans[3]

function solve(s) {
    let ans = [0, 0, 0, 0]
    s.split('').forEach(e => {
        if (e.charCodeAt(0) > 64 && e.charCodeAt(0) < 91) {
            ans[0] += 1
        } else if (e.charCodeAt(0) > 96 && e.charCodeAt(0) < 123) {
            ans[1] += 1
        } else if (!isNaN(Number(e))) {
            ans[2] += 1
        } else ans[3] += 1
    })
    return ans
}