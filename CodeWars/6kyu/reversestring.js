// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string) {
    let splitstring = string.split(' ')
    let splittedwords = splitstring.map(e => e.split(''))
    splittedwords.map(e => e.length >= 5 ? e.reverse() : 0)
    return splittedwords.map(e => e.join('')).join(' ')
}