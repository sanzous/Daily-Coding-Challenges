//P - a string of any length
//R - the length of the longest substring containing only vowels
//E - solve("codewarriors") should return 2 as the longest substring is io
//P - first we set variables for vowels that hold the vowels
//and then a longest variable to hold the current longest substring
// we then also declare a variable to hold the temporary longest substring that will reset 
// we then loop through the given string, if the element is a vowel we increment temp and then check if temp is bigger than longest
// if temp is bigger than longest we set longest as temp
//once we reach a non vowel element we then reset temp back to 0 as it will be a new substring
// we then return longest as the answer
function solve(s) {
    let vowels = 'aeiou'
    let longest = 0
    let temp = 0
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            temp++
            if (temp > longest) {
                longest = temp
            }
        } else {
            temp = 0
        }
    } return longest
}