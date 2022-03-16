function XO(str) {
    const newstr = str.split('');
    let countOfX = 0;
    let countOfO = 0;
    for (let i = 0; i < newstr.length; i++) {
        if (newstr[i].toLowerCase() === 'x') {
            countOfX++;
        } else if (newstr[i].toLowerCase() === 'o') {
            countOfO++;
        }
    } return countOfX == countOfO

}