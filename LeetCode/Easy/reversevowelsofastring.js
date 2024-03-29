/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u']
    let currentvowels = []
    let ans = ''
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            currentvowels.push(s[i])
        }
    }
    currentvowels = currentvowels.reverse()
    let currentReversedArray = 0
    for(let i = 0; i < s.length; i++){
        if(vowels.includes(s[i].toLowerCase())){
            ans += currentvowels[currentReversedArray]
            currentReversedArray++
        }else ans += s[i]
    }
   return ans
};