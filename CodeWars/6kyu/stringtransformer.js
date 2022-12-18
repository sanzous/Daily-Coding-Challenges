// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

//P - a string of words
//R - the string of words but the words in reverse order and each letter case the opposite
//E - 'Example string', 'STRING eXAMPLE'
//P - first we take the str and split it into an array of its words which we then reverse to get the words in reverse order
// We then use the map function and inside the map function we take each element(the word) and split it into letters. Inside the split
// letters array we then use a nested map. In the nested map we check to see if the current word equals its lower case equivalent. If it does we 
// return the upper case element if not we return the lower case element. After we get the new array of letters we then join each one back into a word
// Outside of the nested map we then join the new array of words reversed and return that

function stringTransformer(str) {
    return str.split(' ')
        .reverse()
        .map(e => e.split('')
            .map(e => e === e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()).join(''))
        .join(' ')
}