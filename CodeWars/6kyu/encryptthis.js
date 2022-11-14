// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

//P - A string containing 1 or more words, will only contain letters and no special characters
//R - The same string but for each word the first letter converted to its ASCII code and the second and last letter switched
//E - "A wise old owl lived in an oak", "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
//P - We first split the given paramater into an array of strings
// we then want to work on each string. We can use a for loop and iterate through the now split string.
// If the current element length is 1 we return its ASCII code
// otherwise we split that element into an array of its letters.
// we turn the first element into its ascii code, we store the 2nd letter temporarily in a new variable
// we then set the second element to equal the last element
// we then set the last element to equal the variable that held the 2nd letter
// we then set the current element equal to the newWord joined back into a string.
// after iterating through the array we then return the array of string back with the join method.
var encryptThis = function (text) {
    text = text.split(' ')
    let ans
    for (let i = 0; i < text.length; i++) {
        if (text[i].length == 1) {
            text[i] = text[i].charCodeAt(0).toString()
        } else {
            let newWord = text[i].split('')
            newWord[0] = newWord[0].charCodeAt(0).toString()
            let temp = newWord[1]
            newWord[1] = newWord[newWord.length - 1]
            newWord[newWord.length - 1] = temp
            text[i] = newWord.join('')

        }

    } return text.join(' ')
}