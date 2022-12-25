// Write a function that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
function vowel2index(str) {
    let vowels = 'aeiou'
    return str.split('').map((e, i) => vowels.includes(e.toLowerCase()) ? i + 1 : e).join('')
}
