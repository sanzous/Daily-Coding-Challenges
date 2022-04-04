function vowelIndices(word) {
    let arr = [];
    word = word.toUpperCase().split('');
    const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            arr.push(i + 1);
        }
    } return arr
}