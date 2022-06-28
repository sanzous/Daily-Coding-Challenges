function shortcut(string) {
    const vowels = 'aeiou'
    return string.split('').filter(e => !vowels.includes(e)).join('')
}