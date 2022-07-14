function position(letter) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arr = alphabet.split('')
    return `Position of alphabet: ${arr.indexOf(letter) + 1}`
}