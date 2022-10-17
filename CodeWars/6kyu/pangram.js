// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, False if not.Ignore numbers and punctuation.

//P -- we will be given a string containing words. No integers. It can contain spaces but no special characters.
//R -- True if the string given is a pangram or false if it isn't
//E -- "The quick brown fox jumps over the lazy dog." would return true as it is a pangram
//P -- we first create a new string that lowerCases the parameter given to ensure we handle all Case Sensitive elements
// We then create a variable that holds all the alphabetical letters
// We can then use this variable to create an object holding each letter as a key and a value of 0
// We then iterate through the string and incrementing the value by 1 if it is part of the alphabet
// we then iterate through the object and if any letter has a value of 0 we return false
// otherwise we return true


function isPangram(string) {
    const str = string.toLowerCase().split('')
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let alphabetObject = {}
    alphabet.forEach(v => {
        alphabetObject[v] = 0;
    });
    str.forEach(e => {
        e in alphabetObject && alphabetObject[e]++
    })

    return !Object.values(alphabetObject).includes(0)


}