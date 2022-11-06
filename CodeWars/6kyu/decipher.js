// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

//P - a string of words, the words containing letters and integers
//R - the same string of words but decoded. The first letter from the integers containing their character code
// and the second and last letter switching places
//E - '72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o', 'Have a go at this and see how you do'
//P - first we split the given parameter and set it to a variable
// then we create a new array by using the map method.
//inside the map we can find the first letter by filtering each word to see if itll become NaN if we turn it into an integer
// this will leave us only the integers from the word. we can use this with a replace method to replace the part of the string containing
// those numbers with the letter from the CharCode
// then we make a check to see if the word is longer than 2 characters
// if it isnt then we can just return as is
// if its longer than 2 characters we split the word
// we set a variable to hold the second letter
// we then set the second array element to the last array element value
// we then set the last array element to the variable that held and return that from the if function
// we then return e from the map method and then we join the new array from the map method and that should become our deciphered string.
function decipherThis(str) {
    const words = str.split(' ')
    const deciphered = words.map(e => {
        let firstLetter = e.split('').filter(e => !isNaN(+e)).join('')
        e = e.replace(firstLetter, String.fromCharCode(firstLetter))
        if (e.length > 2) {
            e = e.split('')
            let lastLetter = e[1]
            e[1] = e[e.length - 1]
            e[e.length - 1] = lastLetter
            return e.join('')
        }
        return e
    })
    return deciphered.join(' ')
}; 3