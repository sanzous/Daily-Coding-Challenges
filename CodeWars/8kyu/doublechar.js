function doubleChar(str) {
    let newstr = [];
    for (let i = 0; i < str.length; i++) {
        newstr.push(str[i]);
        newstr.push(str[i]);
    } return newstr.join('');
}