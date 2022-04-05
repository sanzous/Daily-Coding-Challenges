var capitals = function (word) {
    word = word.split('');
    let newarr = [];
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            newarr.push(i)
        }
    } return newarr
};