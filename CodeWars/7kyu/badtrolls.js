function disemvowel(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return [...str].filter(l => !vowels.includes(l.toLowerCase())).join('')
}