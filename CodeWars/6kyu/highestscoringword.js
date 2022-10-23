// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


//P - A string of letters or words. Will always be lowercase and will always be valid
//R - The word with the most points. Each letter in the word counts for a point
//E - 'man i need a taxi up to ubud' 'taxi' since each letter in taxi will come up with the highest amount of points
//P - First we need create a variable to hold the longest current word. We then need to split the given paramater into an array. After getting the array we then need to 
// get the value of each string. We can accomplish this by forEach method on each string and getting the numerical value of each string. If the numerical value is larger than the current word then we replace it.
// At the end we return the variable holding the highest valued word
function high(x) {
    let score = 0;
    let highestWord;
    let words = x.split(' ')
    words.forEach(e => {
        let temp = e.split('')
        let tempscore = 0
        for (let i = 0; i < temp.length; i++) {
            tempscore += temp[i].charCodeAt(0) - 96
            if (tempscore > score) {
                score = tempscore
                highestWord = temp
            }
        }
    })
    return highestWord.join('')
}