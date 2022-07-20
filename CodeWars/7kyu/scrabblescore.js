function scrabbleScore(str) {
    let values = [];
    str = str.split('');
    if (str.length == 0) {
        return 0
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            values.push($dict[str[i].toUpperCase()])
        }
    } return values.reduce((p, c) => p + c, 0)
}