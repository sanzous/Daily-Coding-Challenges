function replace(s) {
    let vowel = 'aeiou'
    vowel = vowel.split('')
    s = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (vowel.includes(s[i].toLowerCase())) {
            s[i] = '!'
        }
    } return s.join('')
}