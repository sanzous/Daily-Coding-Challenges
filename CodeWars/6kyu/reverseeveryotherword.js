// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//P -- a string of letters or numbers. It can also be a string of empty white spaces
//R -- the same string with every other word reversed
//E -- "Reverse this string, please!", "Reverse siht string, !esaelp"
//P -- first we split the original string into an array containing each seperate "word"
// we can then apply a map onto the new splitted variable using the 1st and 2nd parameter for element and index respectively
// we then check that if the index is odd we apply a split,reverse,join on the element to reverse the word else we just return the word
// we then join the new mapped array and use trim to remove any whitespace before the first word and after the last word.
function reverse(str) {
    let reversedStr = str.split(' ')
    return reversedStr.map((e, i) => i % 2 !== 0 ? e.split('')
        .reverse()
        .join('') : e).join(' ').trim()
}