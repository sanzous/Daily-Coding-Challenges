function duplicateEncode(word) {

    word = word.toLowerCase();
    let newarr = '';
    function count(word, find) {
        return (word.split(find)).length - 1;
    }
    for (let i = 0; i < word.length; i++) {
        if (count(word, word[i]) > 1) {
            newarr += ")"
        } else {
            newarr += "("
        }

    } return newarr
}
